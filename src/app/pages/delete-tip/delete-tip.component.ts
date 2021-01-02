import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core'
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar'

@Component({
  selector: 'ld-delete-tip',
  template: `
    <div id="delete-tip" class="delete-tips"></div>
  `,
  styles: [
    `.delete-tips{
      width: 100%;
      min-height: 200px;
      max-height: 360px;
      overflow: auto;
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteTipComponent implements OnInit{

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: {[p: number]: string} | string) { }

  ngOnInit(): void {
    let insert = ''
    if (typeof this.data === 'string' ){
      insert = `<p style=" display: inline-block;text-indent: 12px; margin: 4px 6px; color: #B82A1E">${this.data}</p>`
    }else{
      for (const [key, value] of Object.entries(this.data)){
        insert += `<p style=" display: inline-block;text-indent: 12px; margin: 4px 6px; color: #B82A1E">
            ${key} : ${value}
            </p>`
      }
    }
    // @ts-ignore
    document.getElementById('delete-tip').innerHTML = insert
  }
}
