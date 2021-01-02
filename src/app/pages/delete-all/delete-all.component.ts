import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'


import {Sector} from '../../../proto/lotuspb/lotus.pb'

@Component({
  selector: 'ld-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteAllComponent implements OnInit {
  isClose = false
  constructor(
    public dialogRef: MatDialogRef<DeleteAllComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sector[]
  ) { }

  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close()
  }

  confirm(): void{
    this.isClose = true
    this.dialogRef.close(this.isClose)
  }

}
