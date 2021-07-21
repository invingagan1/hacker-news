import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ApiService } from "../api/api.service";
import { Item } from "../data-model/interfaces";

@Injectable()
export class NewSandboxService {
  public items = new BehaviorSubject<Item[]>([]);
  private _items: Item[] = [];

  constructor(private apiService: ApiService) {}
  public async  getNewItems() {
    const itemIds = await this.apiService.getNewStories(0, 10);
    this._items = await this.apiService.getItems(itemIds);
    this.items.next(this._items);
  }
}
