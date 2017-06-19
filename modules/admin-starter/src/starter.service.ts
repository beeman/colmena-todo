import { Injectable } from '@angular/core'

import { StarterItemApi } from '@colmena/admin-lb-sdk'

@Injectable()
export class StarterService {

  constructor(private service: StarterItemApi) {}

  getItems() {
    return this.service.find()
  }
}
