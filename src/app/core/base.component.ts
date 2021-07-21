import { Component, OnDestroy, OnInit } from "@angular/core";
import { SandboxService } from "./sandbox.service";

@Component({
    template:``
})
export abstract class BaseComponent implements OnInit, OnDestroy {
  constructor(public sandbox: SandboxService) {}
  ngOnDestroy() {
    this.sandbox.onDestroy();
  }
  ngOnInit() {
    this.sandbox.onInit();
  }
}