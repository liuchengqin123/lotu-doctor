import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core'
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar'

@Component({
  selector: 'ld-change-tip',
  template: `
    <div id="change-tip" class="change-tip"></div>
  `,
  styles: [
    `.change-tip{
      min-height: 60px;
      max-height: 360px;
      width: 100%;
      overflow: auto;
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeTipComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: {[p: number]: string } | string) { }

  ngOnInit(): void {
    let insert = ''
    if (typeof this.data === 'string'){
      console.log(this.data)
      insert = `<p style=" display: inline-block;text-indent: 12px; margin: 4px 6px; color: #f44336">
            ${this.data}
            </p>`
    }else{
      for (const [key, value] of Object.entries(this.data)){
        insert += `<p style=" display: inline-block;text-indent: 12px; margin: 4px 6px; color: #f44336">
            ${key} : ${value}
            </p>`
      }
    }
    // @ts-ignore
    document.getElementById('change-tip').innerHTML = insert
  }
}
