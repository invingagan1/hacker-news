import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/data-model/interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() item: Item | undefined;
  isExpanded = true;
  constructor() {}

  ngOnInit(): void {
  }
  get kidsCount(): string {
    return this.item?.kids?.length ? this.item?.kids?.length.toString() : '';
  }
}
