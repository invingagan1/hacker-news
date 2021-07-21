import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { SandboxService } from '../core/sandbox.service';
import { Item } from '../data-model/interfaces';

@Injectable()
export class HomeSandboxService extends SandboxService {
  public topStories = new BehaviorSubject<Item[]>([]);
  private _topStories: Item[] = [];
  public isLoading: boolean = true;
  private start = 0;
  private itemCount = 5;

  constructor(private apiService: ApiService) {
    super();
  }

  async getTopStories() {
    this.isLoading = true;
    const ids = await this.apiService.getTopStories(this.start, this.itemCount);
    const itemPromises = ids.map((id) => this.apiService.getItem(id));
    const items = await Promise.all(itemPromises);
    this._topStories.splice(0);
    this._topStories = this._topStories.concat(items);
    this.topStories.next(this._topStories);
    this.isLoading = false;
  }
  async more() {
    this.start = this.start + this.itemCount;
    const ids = await this.apiService.getTopStories(this.start, this.itemCount);
    const itemPromises = ids.map((id) => this.apiService.getItem(id));
    const items = await Promise.all(itemPromises);
    this._topStories = this._topStories.concat(items);
    this.topStories.next(this._topStories);
  }
  public reset() {
    this.start = 0;
  }

  onInit() {
    this.getTopStories();
  }
  onDestroy() {
    this.reset();
  }
}
