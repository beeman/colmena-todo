import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IndexComponent } from './components/index.component'
import { ItemsComponent } from './components/items.component'

const routes: Routes = [ {
  path: 'todo',
  data: {
    title: 'Todo',
  },
  children: [
    { path: '', component: IndexComponent, children: [
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      { path: 'items', component: ItemsComponent, data: { title: 'Items' } },
    ]}
  ]
} ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
