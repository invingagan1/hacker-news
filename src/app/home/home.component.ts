import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeSandboxService } from './home-sandbox.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(public sandbox: HomeSandboxService) {
   }

  ngOnInit(): void {
    this.sandbox.getTopStories();
  }
  ngOnDestroy(){
    this.sandbox.reset();
  }
  more(){
    this.sandbox.more();
  }

}
