import { Injectable } from '@angular/core'

import { TodoApi } from '@colmena/admin-lb-sdk'

@Injectable()
export class TodoService {

  constructor(private service: TodoApi) {}

  getItems() {
    return this.service.find()
  }

  toggleItem(item) {
    item.done = !item.done
    return this.service.upsert(item)
  }
}
