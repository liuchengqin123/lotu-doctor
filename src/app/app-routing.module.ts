import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    data: { breadcrumb: ['Dashboard'] }
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
