import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core'
import {MatPaginator} from '@angular/material/paginator'
import {MatTableDataSource} from '@angular/material/table'
import {MatDialog} from '@angular/material/dialog'
import {SelectionModel} from '@angular/cdk/collections'
import {animate, state, style, transition, trigger} from '@angular/animations'
import {MatSnackBar} from '@angular/material/snack-bar'
import {Observable} from 'rxjs'

import {ChangeStateComponent} from '../change-state/change-state.component'
import {
  MinerInfoDetailedResponse,
  Sector,
  SectorBatchResponse,
  SectorLegalStatesResponse,
  SectorListRequest,
  SectorListResponse,
  SectorLogResponse,
  SectorRemoveRequest,
  SectorRequest,
  SectorUpdateRequest,
  Worker
} from 'proto/lotuspb/lotus.pb'
import {LotusServiceClient} from 'proto/lotuspb/lotus.pbsc'
import {DeleteSectorComponent} from '../delete-sector/delete-sector.component'
import {Empty} from 'proto/google/protobuf/empty.pb'
import {DeleteTipComponent} from '../delete-tip/delete-tip.component'
import {DeleteAllComponent} from '../delete-all/delete-all.component'
import {ChangeAllComponent} from '../change-all/change-all.component'
import {ChangeTipComponent} from '../change-tip/change-tip.component'

@Component({
  selector: 'ld-sector-list',
  providers: [LotusServiceClient],
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.sass'],
   changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '560px'})),
      transition('expanded <=> collapsed', animate('10ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger('sectorWorker', [
      state('collapsed', style({ height: '0', minHeight: '0', display: 'none'})),
      state('expanded', style({ height: '*'})),
      transition('expanded <=> collapsed', animate('10ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SectorListComponent implements OnInit{
  minerInformation!: MinerInfoDetailedResponse
  displayedColumns: string[] = ['select', 'sectorId', 'state', 'operation']
  dataSource!: MatTableDataSource<Sector>
  sectors: Sector[] | undefined = []
  totalPages = 0
  pageSize = 20
  middleIndex = 0
  pageIndex = 1
  idFilter: string[] = []
  isShowBackTop = false  // 控制返回顶部按钮显示与否
  isShowSpinner = false  // 控制获取扇区列表的spinner
  expandedSpinner = false // 控制获取sector日志的spinner
  allFailedState: string[] = []
  stateControl: string[] = []
  stateFilter: string[] | undefined  = []
  expandedElement = '' // 控制展开日志的变量
  sectorWorkElement = '' // 控制展开miner信息的变量
  sectorLog: string | undefined = ''
  workerInformation: WorkerInformation = {
    worker: undefined,
    error: ''
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator
  // tslint:disable-next-line:no-any
  @ViewChild('empty', { read: TemplateRef }) empty!: TemplateRef<any>
  @ViewChild('emptyContainer', { read: ViewContainerRef})  emptyContainer!: ViewContainerRef
  @ViewChild('failedEl', { read: ElementRef}) failedEl!: ElementRef
  selection = new SelectionModel<string>( true, [], true)  // 控制状态界面的展示
  selectedSector = new  SelectionModel<Sector>(true, [], true) // 控制扇区列表的展示
  constructor(
    private lotusServiceClient: LotusServiceClient,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private renderer2: Renderer2,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.stateInit()
    this.getMiner()
  }
  // 在扇区列表中展示模板
  showTemplate(): void{
    this.emptyContainer.clear()
    this.dataSource.data = []
    this.isShowSpinner = false
    this.emptyContainer?.createEmbeddedView(this.empty)
    this.changeDetector.markForCheck()
  }

  // 返回到顶部按钮
  @HostListener('window:scroll')
  checkScroll(): void{
    const scrollPosition = window.pageYOffset ||
      document.documentElement.scrollTop || document.body.scrollTop || 0

    if (scrollPosition >= 100) {
      this.isShowBackTop = true
    }else {
      this.isShowBackTop = false
    }
  }

  gotoTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  /******************************************* 筛选状态操作 *******************************************/
  // 筛选状态
  selected(): void{
    this.stateControl = []
    this.selection.selected.forEach( s => {
      this.stateControl.push(s)
    })
    this.selectedSector.clear()
    this.idFilter = []
    this.pageIndex = 1
    this.sectorList()
  }
  // 全选本页面所有扇区
  selectAllSectors(): void{
    this.isAllSectorSelected() ?
      this.selectedSector.clear() :
      this.dataSource.data.forEach( s => this.selectedSector.select(s))
  }
  isAllSectorSelected(): boolean{
    return  this.isAllSelected(this.selectedSector.selected.length, this.dataSource.data.length)
   }
  // 全选状态
  selectAllState(): void{
    this.renderer2.removeClass(this.failedEl.nativeElement, 'failed-state-active')
    this.renderer2.addClass(this.failedEl.nativeElement, 'failed-state')
    this.isAllStateSelected() ?
      this.selection.clear() :
      this.stateFilter?.forEach( s => this.selection.select(s))
  }
  isAllStateSelected(): boolean{
    return this.isAllSelected(this.selection.selected.length, this.stateFilter?.length)
  }
  // 封装isAllSelected
  private isAllSelected(selectedGroup: number, dataWrap: number | undefined): boolean{
    return selectedGroup === dataWrap
  }
  // 筛选状态初始化
  stateInit(): void{
    let filter: string[] = []
    this.getState().subscribe(
      (res) => {
        this.stateFilter = res.states
        filter =  (res.states as string[]).filter(s => s.match(/Failed/))
        filter.forEach( m => {
          this.selection.select(m)
          this.stateControl.push(m)
        })
        this.allFailedState = this.selection.selected
        this.sectorList()
      }
    )
  }

  selectedAllFailedState(): void{
    if (this.isEqual() ){
      this.renderer2.removeClass(this.failedEl.nativeElement, 'failed-state-active')
      this.renderer2.addClass(this.failedEl.nativeElement, 'failed-state')
      this.selection.clear()
      return
    }else{
      this.renderer2.removeClass(this.failedEl.nativeElement, 'failed-state')
      this.renderer2.addClass(this.failedEl.nativeElement, 'failed-state-active')
      this.selection.clear()
      this.selection.select(...this.allFailedState)
      this.stateControl = this.allFailedState
    }
  }
  isEqual(): boolean{
    return this.allFailedState.length === this.selection.selected.length &&
      this.allFailedState.every( (v, i) => v === this.selection.selected[i])
  }

  /******************************************* 分页器以及操作 *******************************************/
  // 处理页数
  solvePagesIndex(total: number): void{
    const pages =  total % this.pageSize
    const indexNum = total / this.pageSize
    if (pages > 0){
      this.totalPages = Math.ceil(indexNum)
    }else {
      this.totalPages = Math.floor(indexNum)
    }
  }
  // 从输入框控制page index
  putToSetPageIndex(): void{
    const newPage = this.paginator.pageIndex + 1
    const page = this.pageIndex - 1
    if ( newPage === this.pageIndex ){
      return
    }else if ( this.pageIndex > this.totalPages ) {
      this.pageIndex = this.totalPages
    }else if (this.pageIndex < 1) {
      this.pageIndex = 1
    }else{
      this.middleIndex = page
      this.paginator.pageIndex = page
      this.selectedSector.clear()
      this.sectorList()
    }
  }
  // 分页器控制页码和
  pageSizeChange(): void{
    this.pageSize = this.paginator.pageSize
    this.selectedSector.clear()
    this.pageIndex = this.paginator.pageIndex + 1
    this.sectorList()
  }

  /******************************************* 所有的扇区打开界面 *******************************************/
  // 打开状态变更页面
  openChangeState(sector: Sector): void{
    // tslint:disable-next-line:no-any
    const dialog = this.dialog.open<ChangeStateComponent, any, any>(ChangeStateComponent, {
      data: sector,
      // disableClose: true  在page.Module.ts中设置
    })
    dialog.afterClosed().subscribe(
      res => {
        if (res){
          this.updateSectorState([sector.sectorId as string], res).subscribe(
            ({ failed }) => {
              // @ts-ignore
              if (Object.keys(failed).length === 0){
                this.commonOperation()
              }else{
                this.openChangeTip(failed)
              }
            },
            (err) => {
              this.openChangeTip(err.details as string)
            }
          )
        }else {
          return
        }
      },
      (err) => {
        console.log(err)
      }
    )
  }
  // 打开更改操作提示框
  openChangeTip(error: { [p: number]: string } | undefined | string): void{
    this.snackBar.openFromComponent( ChangeTipComponent, {
      data: error,
      duration: 5000,
      panelClass: 'active'
    })
  }

  // 打开批量改变状态界面
  openChangAllState(): void{
    const stateArray: string[] = []
    const f = this.unique(this.selectedSector.selected, '_state')
    for (const value of f.values()) {
      for (const [key, v] of Object.entries(value)){
        if (key === '_state'){
          stateArray.push(v as string)
        }
      }
    }
    const dialogRef = this.dialog.open<any, any, any>(ChangeAllComponent, {
      data: stateArray,
      // disableClose: true  在page.Module.ts中设置
    })
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res){
          const sectorIds = this.selectedSector.selected.filter(s => s.sectorId !== undefined).map(s => s.sectorId)
          this.updateSectorState(sectorIds as string[], res).subscribe(
            ({ failed }) => {
              // @ts-ignore
              if (Object.keys(failed).length > 0) {
                this.openChangeTip(failed)
              }
              this.commonOperation()
            },
            err => {
              this.openChangeTip(err.details)
            }
          )
        }
        else {
          return
        }
      },
      error => {
        console.log(error)
      }
    )
  }
  // 获取日志
  log(id: string): void{
    this.expandedSpinner = true
    this.getLog(id).subscribe(
      (l: SectorLogResponse) => {
        this.sectorLog = l.log
        this.delaySpinner()
      },
      error => {
        // let insert = ''
        // insert = `<div>${error.details}</div>`
        // // @ts-ignore
        // document.getElementById('log-error').innerHTML = insert
        // this.delaySpinner()
      })
 }

 getSectorWorker(sectorId: string): void{
    this.expandedSpinner = true
    this.workerInformation.error = ''
    this.workerInformation.worker = undefined
    this.sectorWorker(sectorId).subscribe(
      ( w: Worker) => {
        this.workerInformation.worker = w
        this.delaySpinner()
      },
      (err) => {
        this.workerInformation.error = err.details
        this.delaySpinner()
      }
    )
 }
 // 展开时的spinner延时
  delaySpinner(): void {
    setTimeout(() => {
      this.expandedSpinner = false
      this.changeDetector.markForCheck()
    }, 300)
  }
 // 获取minerId
  getMiner(): void{
    this.getMinerInfo().subscribe(
      miner => {
        this.minerInformation = miner
        let output = ''
        // @ts-ignore
        for (const [key, value] of Object.entries(miner.localSectors)){
          output += `<div style=" display: inline-block;text-indent: 16px; padding: 5px 0px">
            ${key} : ${value}
            </div>`
        }
        // @ts-ignore
        document.getElementById('output').innerHTML = output
      }
    )
  }
  // 打开删除界面
  openDeleteDialog(Sector$: Sector): void{
    const dialogRef =  this.dialog.open<any, any, string>(DeleteSectorComponent, {
      data: Sector$ ,
      // disableClose: true  在page.Module.ts中设置
    })
    dialogRef.afterClosed().subscribe( (res) => {
      if (res){
        this.removeSector([res]).subscribe(
          ({ failed }) => {
            // @ts-ignore
            if (Object.keys(failed).length === 0){
              this.commonOperation()
            }else{
              this.openDeleteTip(failed)
            }
          },
          err => {
            this.openDeleteTip(err.details)
          }
        )
      }
      },
    )
  }
 // 删除sector扇区
  openDeleteTip(error: {[p: number]: string} | undefined | string): void{
    this.snackBar.openFromComponent(DeleteTipComponent, {
      duration: 3000,
      data: error,
      panelClass: 'active'
    })
  }
  // 打开扇区批量删除界面
  openDeleteAllDialog(): void{
    // tslint:disable-next-line:no-any
    const dialogRef = this.dialog.open<any, any, boolean>(DeleteAllComponent, { data: this.selectedSector.selected})
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res) {
          const sectorIds = this.selectedSector.selected.filter(s => s.sectorId !== undefined).map(s => s.sectorId)
          this.removeSector(sectorIds as string[]).subscribe(
            ({ failed }) => {
              // @ts-ignore
              if (Object.keys(failed).length > 0) {
                this.openDeleteTip(failed)
              }
              this.commonOperation()
            },
            err => {
              this.openDeleteTip(err.details)
            }
          )
        }
      })
  }

  commonOperation(): void{
    this.selectedSector.clear()
    this.sectorList()
  }

  acquireSectorId(value: string): void{
    this.renderer2.removeClass(this.failedEl.nativeElement, 'failed-state-active')
    this.renderer2.addClass(this.failedEl.nativeElement, 'failed-state')
    this.idFilter = []
    this.selection.clear()
    this.selectedSector.clear()
    this.pageIndex = 1
    this.emptyContainer.clear()
    this.idFilter.push(value)
    this.stateControl = []
    this.sectorList()
  }

  /******************************************* 扇区列表深封装 *******************************************/
  // 获取扇区列表
  private sectorList(): void{
    this.isShowSpinner = true
    this.pageIndex = this.pageIndex ? this.pageIndex : 1
    if (this.pageIndex > 0){
      this.middleIndex = this.pageIndex - 1
    }
    this.getSectorList(this.idFilter, this.stateControl, this.middleIndex, this.pageSize).subscribe(
      ({ total, sectors}) => {
        if (sectors?.length){
          this.sectors = sectors
          setTimeout(() => {
            this.isShowSpinner = false
            this.changeDetector.markForCheck()
          })
          this.emptyContainer.clear()
          this.dataSource = new MatTableDataSource<Sector>(this.sectors)
          this.paginator.length = total as number
          console.log(this.paginator.getNumberOfPages())
          this.paginator.pageIndex = this.middleIndex
          this.solvePagesIndex(total as number)
        }else {
          this.showTemplate()
        }
      },
      () => {
        this.showTemplate()
      }
    )
  }

  /******************************************* 后台请求封装 *******************************************/
  private getMinerInfo(): Observable<MinerInfoDetailedResponse>{
    return this.lotusServiceClient.minerInfoDetailed(new Empty({}))
  }

  private getSectorList(idFilter: string[], stateFilter: string[], page: number, pageSize: number): Observable<SectorListResponse>{
    return this.lotusServiceClient.sectorList( new SectorListRequest({idFilter , stateFilter , page, pageSize }))
  }

  private removeSector(sectorIds: string[] ): Observable<SectorBatchResponse>{
    return this.lotusServiceClient.sectorRemove( new SectorRemoveRequest({ sectorIds }))
  }

  private getLog(sectorId: string | undefined): Observable<SectorLogResponse> {
    return this.lotusServiceClient.sectorLog(new SectorRequest({ sectorId }))
  }

  private updateSectorState(sectorIds: string[], newState: string): Observable<SectorBatchResponse>{
    return this.lotusServiceClient.sectorUpdate( new SectorUpdateRequest({ sectorIds, newState }))
  }

  private getState(): Observable<SectorLegalStatesResponse> {
    return this.lotusServiceClient.sectorLegalStates(new Empty({}))
  }

  private sectorWorker(sectorId: string): Observable<Worker>{
    return this.lotusServiceClient.sectorWorker(new SectorRequest({sectorId}))
  }

  unique(arr, key): [] {
    const res = new Map()
    return arr.filter((a) => !res.has(a[key]) && res.set(a[key], 1))
  }
}

export interface  WorkerInformation {
  worker: Worker | undefined
  error: string
}
