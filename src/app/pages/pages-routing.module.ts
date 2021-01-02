import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PagesComponent } from './pages.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { SectorListComponent } from './sector-list/sector-list.component'
import { ErrorComponent } from './errors/error.component'

import { SectorListResolver } from './sector-list/sector-list.resolver'
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'miners/:id/sector/list',
        component: SectorListComponent,
        resolve: { miner: SectorListResolver },
      },
      {
        path: 'errors/notfound',
        component: ErrorComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'errors/notfound',
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
