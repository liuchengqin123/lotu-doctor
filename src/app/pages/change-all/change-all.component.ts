import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {FormControl, Validators} from '@angular/forms'
import {Observable} from 'rxjs'

import {SectorLegalStatesResponse} from 'proto/lotuspb/lotus.pb'
import {Empty} from 'proto/google/protobuf/empty.pb'
import {LotusServiceClient} from 'proto/lotuspb/lotus.pbsc'

@Component({
  selector: 'ld-change-all',
  templateUrl: './change-all.component.html',
  styleUrls: ['./change-all.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeAllComponent implements OnInit {
  stateFilter: string[] = []
  selectedState = ''
  stateControl = new FormControl('', Validators.required)
  constructor(
    private lotusServiceClient: LotusServiceClient,
    public dialogRef: MatDialogRef<ChangeAllComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) { }

  ngOnInit(): void {
    console.log(this.data)
    this.getState().subscribe(
      res => {
        // @ts-ignore
        this.stateFilter = res.states
      }
    )
  }

  close(): void{
    const cancel = false
    this.dialogRef.close(cancel)
  }

  confirm(): void{
    this.dialogRef.close(this.selectedState)
  }

  private getState(): Observable<SectorLegalStatesResponse> {
    return this.lotusServiceClient.sectorLegalStates(new Empty({}))
  }
}
