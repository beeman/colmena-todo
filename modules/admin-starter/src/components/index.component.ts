import { Component } from '@angular/core'
import { UiTabLink } from '@colmena/admin-ui'

@Component({
  selector: 'app-dashboard',
  template: `
    <ui-page [tabs]="tabs" title="Todo">
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class IndexComponent {

  public tabs: UiTabLink[] = [
    { icon: 'icon-list', title: 'Items', link: 'items' },
  ]

}
