import { Component, OnInit } from '@angular/core'
import { Page } from '@nativescript/core'

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService,
    private readonly page : Page
    ) {

    }

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }
}
