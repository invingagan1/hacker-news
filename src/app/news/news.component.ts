import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { Item } from '../data-model/interfaces';
import { NewsSandboxService } from './news-sandbox.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription | undefined;
  private itemSubscription: Subscription | undefined;
  private commentsSubscription: Subscription | undefined;

  public item: Item | undefined = undefined;
  public comments: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    public sandbox: NewsSandboxService
  ) {
    this.itemSubscription = this.sandbox.item.subscribe((i) => {
      this.item = i;
    });
    this.commentsSubscription = this.sandbox.comments.subscribe((c) => {
      this.comments = c;
    });
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      if (params.id) {
        this.sandbox.getNewsAndCommentsOf(params.id);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.itemSubscription?.unsubscribe();
    this.commentsSubscription?.unsubscribe();
    this.sandbox.reset();
  }

  loadMore() {
    this.sandbox.loadMore();
  }
}
