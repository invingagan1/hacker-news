import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ApiService } from '../api/api.service';
import { Item, ItemId } from '../data-model/interfaces';

@Injectable()
export class NewsSandboxService {
  startFrom = 0;
  commentsCount = 3;
  item = new Subject<Item>();
  comments = new Subject<Item[]>();
  private _comments: Item[] = [];
  private _item: Item | undefined = undefined;
  isLoading = true;

  constructor(private apiService: ApiService) {}

  public async getNewsAndCommentsOf(id: ItemId) {
    this.isLoading = true;
    this._item = (await this.apiService.getItem(id)) as Item;
    this.item.next(this._item);
    if (this._item.kids && this._item.kids.length > 0) {
      const comments = await this.getComments(
        this._item.kids.slice(this.startFrom, this.commentsCount)
      );
      this._comments.splice(0);
      this._comments = this._comments.concat(comments);
      this.comments.next(this._comments);
    }
    this.isLoading = false;
  }
  private async getComments(ids: ItemId[]) {
    let comments: Item[] = [];
    comments = await Promise.all(ids.map((c) => this.apiService.getItem(c)));
    return comments;
  }
  public async loadMore() {
    const start = this.startFrom +  this.commentsCount;

    if (this._item?.kids && this._item?.kids.length > 0) {
      const comments = await this.getComments(
        this._item.kids.slice(start, start + this.commentsCount)
      );
      this._comments = this._comments.concat(comments);
      this.comments.next(this._comments);
      this.startFrom = start;
    }
  }
}
