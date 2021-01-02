import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SharedModule } from 'app/shared/shared.module'
import { PagesRoutingModule } from './pages-routing.module'
import { PagesComponent } from './pages.component'
import { AddMinerComponent } from './add-miner/add-miner.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { SectorListComponent } from './sector-list/sector-list.component'
import { ErrorComponent} from './errors/error.component'
import { DeleteSectorComponent } from './delete-sector/delete-sector.component'
import { ChangeStateComponent } from './change-state/change-state.component'
import { DeleteTipComponent } from './delete-tip/delete-tip.component'
import { DeleteAllComponent } from './delete-all/delete-all.component'
import { ChangeAllComponent } from './change-all/change-all.component'
import { ChangeTipComponent } from './change-tip/change-tip.component'


@NgModule({
  declarations: [
    PagesComponent,
    AddMinerComponent,
    DashboardComponent,
    SectorListComponent,
    ErrorComponent,
    DeleteSectorComponent,
    ChangeStateComponent,
    DeleteTipComponent,
    DeleteAllComponent,
    ChangeAllComponent,
    ChangeTipComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    PagesRoutingModule,
  ],
  entryComponents: [
    DeleteSectorComponent,
    ChangeStateComponent,
    DeleteTipComponent,
    DeleteAllComponent,
    ChangeAllComponent,
  ]
})
export class PagesModule {}
