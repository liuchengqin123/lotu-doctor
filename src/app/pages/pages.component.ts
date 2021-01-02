import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'ld-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagesComponent {}
