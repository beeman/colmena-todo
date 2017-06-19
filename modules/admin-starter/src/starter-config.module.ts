import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'starter'

const link = (...links) => ([ '/', moduleName, ...links ])

const moduleConfig = {
  name: 'Dashboard',
  icon: 'icon-speedometer',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [
    { weight: 2, label: 'Starter',   icon: 'icon-control-play', link: link() }
  ],
  sidebarLinks: [
    { weight: 1, type: 'title', label: 'Starter' },
    { weight: 2, label: 'Starter',   icon: 'icon-control-play', link: link() }
  ],
  dashboardLinks: {},
}

@NgModule()
export class StarterConfigModule {

  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }

}

