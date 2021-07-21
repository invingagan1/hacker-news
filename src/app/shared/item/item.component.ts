import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/data-model/interfaces';
import * as moment from 'moment';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  @Input() index: number | undefined;
  @Input() item: Item | undefined;
  @Input() enableComment: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
  }
}
