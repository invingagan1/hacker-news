import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HomeSandboxService } from './home-sandbox.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(public sandbox: HomeSandboxService) {
    super(sandbox);
   }

  ngOnInit(): void {
    super.ngOnInit();
  }
  ngOnDestroy(){
    super.ngOnDestroy();
  }
  more(){
    this.sandbox.more();
  }

}
