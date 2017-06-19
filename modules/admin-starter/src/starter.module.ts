import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { StarterRoutingModule } from './starter-routing.module'
import { StarterService } from './starter.service'

import { AboutComponent } from './components/about.component'
import { DashboardComponent } from './components/dashboard.component'
import { IndexComponent } from './components/index.component'
import { ItemsComponent } from './components/items.component'

@NgModule({
  imports: [
    CommonModule,
    ColmenaUiModule,
    StarterRoutingModule,
  ],
  providers: [
    StarterService,
  ],
  declarations: [
    AboutComponent,
    DashboardComponent,
    IndexComponent,
    ItemsComponent,
  ],
})
export class StarterModule { }
