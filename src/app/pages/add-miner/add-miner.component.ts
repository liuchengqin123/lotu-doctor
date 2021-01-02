import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {v4 as uuid} from 'uuid'

import {Miner, MinerService} from 'app/services/miner.service'

@Component({
  selector: 'ld-add-miner',
  templateUrl: './add-miner.component.html',
  styleUrls: ['./add-miner.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddMinerComponent implements OnInit{
  nameControl = new FormControl('', Validators.required)
  labelControl = new FormControl('', Validators.required)
  remarkControl = new FormControl('')
  protocolControl = new FormControl('http')
  addressControl = new FormControl('', [Validators.required]) // TODO: add validators
  portControl = new FormControl(
    2344,
    [Validators.required, Validators.min(1024), Validators.max(65535)],
  )
  addMinerForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private minerService: MinerService,
    private dialogRef: MatDialogRef<AddMinerComponent>,
  ) {}

  ngOnInit(): void {
    this.addMinerForm = this.fb.group({
      name: this.nameControl,
      label: this.labelControl,
      remark: this.remarkControl,
      protocol: this.protocolControl,
      address: this.addressControl,
      port: this.portControl,
    })
  }

  onSubmit(): void {
    const minerEndpoint = `${this.protocolControl.value}://${this.addressControl.value}:${this.portControl.value}`
    const miner: Miner = {
      id: uuid(),
      name: this.nameControl.value,
      label: this.labelControl.value,
      remark: this.remarkControl.value,
      endpoint: minerEndpoint,
    }
    this.dialogRef.close(miner)
  }
}
