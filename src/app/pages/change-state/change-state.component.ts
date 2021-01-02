import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core'
import {FormControl, Validators} from '@angular/forms'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {Observable} from 'rxjs';

import {LotusServiceClient} from 'proto/lotuspb/lotus.pbsc'
import {Sector, SectorLegalStatesResponse} from 'proto/lotuspb/lotus.pb'
import {Empty} from 'proto/google/protobuf/empty.pb'

@Component({
  selector: 'ld-change-state',
  templateUrl: './change-state.component.html',
  styleUrls: ['./change-state.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeStateComponent implements OnInit {
  stateFilter: string[] = []
  selectedState = ''
  message: string | undefined
  oldState = this.data.state
  stateControl = new FormControl('', Validators.required)
  constructor(
    private lotusServiceClient: LotusServiceClient,
    public dialogRef: MatDialogRef<ChangeStateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sector
  ) { }

  ngOnInit(): void {
    this.getState().subscribe(
      res => {
        // @ts-ignore
        this.stateFilter = res.states.filter(item => item.id !== this.data.state)
      }
    )
  }

  confirm(): void{
    this.dialogRef.close(this.selectedState)
  }

  close(): void{
    this.dialogRef.close()
  }

  private getState(): Observable<SectorLegalStatesResponse> {
    return this.lotusServiceClient.sectorLegalStates(new Empty({}))
  }
}
