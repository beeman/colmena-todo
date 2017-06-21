import { NgModule } from '@angular/core'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { TodoRoutingModule } from './todo-routing.module'
import { TodoService } from './todo.service'

import { IndexComponent } from './components/index.component'
import { ItemsComponent } from './components/items.component'

@NgModule({
  imports: [
    ColmenaUiModule,
    TodoRoutingModule,
  ],
  providers: [
    TodoService,
  ],
  declarations: [
    IndexComponent,
    ItemsComponent,
  ],
})
export class TodoModule { }
