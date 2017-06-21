import { Component } from '@angular/core'
import { UiService } from '@colmena/admin-ui'

import { TodoService } from '../todo.service'

@Component({
  selector: 'app-items',
  template: `
    <ui-table [config]="config" [items]="items" (action)="handleAction($event)"></ui-table>
  `,
})
export class ItemsComponent {

  public config = {
    class: 'table table-bordered table-stripes',
    columns: [
      { label: 'Name', field: 'name' },
      { label: 'Done', field: 'done' },
    ],
    rowButtons: [
      { typeName: 'toggle', label: 'Toggle'}
    ]
  }
  public items = []

  constructor(
    private service: TodoService,
    private uiService: UiService,
  ) {}

  ngOnInit() {
    this.getItems()
  }

  getItems() {
    this.service.getItems()
      .subscribe(res => this.items = res)
  }

  handleAction($event) {
    switch ($event.type) {
      case 'toggle':
        return this.service.toggleItem($event.payload)
          .subscribe(
            (res: any) => this.uiService.alertInfo({ title: 'Success', text: `Todo ${res.id} set to ${res.done}`}),
            err => this.uiService.alertError({ title: 'Failed', text: err }),
          )
      default:
        console.log('Unknown action: ', $event)
    }
  }
}
