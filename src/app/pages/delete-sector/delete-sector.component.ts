import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {Sector} from 'proto/lotuspb/lotus.pb'

@Component({
  selector: 'ld-delete-sector',
  templateUrl: './delete-sector.component.html',
  styleUrls: ['./delete-sector.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteSectorComponent implements OnInit {
  value!: string[]
  constructor(
    public dialogRef: MatDialogRef<DeleteSectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sector,
  ) {}

  ngOnInit(): void {
    console.log(this.data)
  }

  confirmed(): void{
    this.dialogRef.close(this.data.sectorId)
  }

  cancel(): void{
    this.dialogRef.close()
  }
}
