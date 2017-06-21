import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'todo'

const link = (...links) => ([ '/', moduleName, ...links ])

const moduleConfig = {
  name: 'Dashboard',
  icon: 'icon-speedometer',
  packageName: `@beeman/module-admin-${moduleName}`,
  topLinks: [
    { weight: 2, label: 'Todo',   icon: 'icon-check', link: link() }
  ],
  sidebarLinks: [
    { weight: 1, type: 'title', label: 'Todo' },
    { weight: 2, label: 'Todo',   icon: 'icon-check', link: link() }
  ],
  dashboardLinks: {},
}

@NgModule()
export class TodoConfigModule {

  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }

}

