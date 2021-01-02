import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

import { Miner, MinerService } from 'app/services/miner.service'
import { AddMinerComponent } from '../add-miner/add-miner.component'

@Component({
  selector: 'ld-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})

export class DashboardComponent implements  OnInit{
  miners: Miner[]
  @ViewChild('deleteMinerTip')
  private deleteMinerTipRef?: TemplateRef<any>

  constructor(
    private dialog: MatDialog,
    private minerService: MinerService,
    private changeDetection: ChangeDetectorRef
  ) {
    this.miners = minerService.miners
  }

  ngOnInit(): void {
  }

  openAddMinerDialog(): void {
    const dialogRef = this.dialog.open<AddMinerComponent, void, Miner>(AddMinerComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addMiner(result)
        this.changeDetection.markForCheck()
      }
    })
  }

  onDeleteMiner(event: MouseEvent, id: string): void {
    const dialogRef = this.dialog.open<any, void, boolean>(
      this.deleteMinerTipRef!,
      { minWidth: '240px', autoFocus: false },
    )
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.deleteMiner(id)
        this.changeDetection.markForCheck()
      }
    })
  }

  private addMiner(miner: Miner) {
    this.minerService.insert(miner)
    this.miners = this.minerService.miners
  }

  private deleteMiner(id: string) {
    this.minerService.delete(id)
    this.miners = this.minerService.miners
  }
}
