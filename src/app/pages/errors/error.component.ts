import { Component, Input } from '@angular/core'

@Component({
  selector: 'ld-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass'],
})
export class ErrorComponent {
  @Input() code = '404'
  @Input() title = 'Notfound'
  @Input() message = 'This page is not found!!!'
}
