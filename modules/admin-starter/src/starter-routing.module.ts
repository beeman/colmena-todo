import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AboutComponent } from './components/about.component'
import { DashboardComponent } from './components/dashboard.component'
import { IndexComponent } from './components/index.component'
import { ItemsComponent } from './components/items.component'

const routes: Routes = [ {
  path: 'starter',
  data: {
    title: 'Starter',
  },
  children: [
    { path: '', component: IndexComponent, children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'items', component: ItemsComponent, data: { title: 'Items' } },
      { path: 'about', component: AboutComponent, data: { title: 'About' } },
    ]}
  ]
} ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
