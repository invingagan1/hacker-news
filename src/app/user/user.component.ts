import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../data-model/interfaces';
import { UserSandboxService } from './user-sandbox.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription | undefined;
  userSubscription: Subscription | undefined;
  user: User | undefined;
  constructor(
    private router: ActivatedRoute,
    public sandbox: UserSandboxService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      if (params.username) {
        this.sandbox.getUser(params.username);
      }
    });
    this.userSubscription = this.sandbox.user.subscribe((u) => {
      this.user = u;
    });
  }
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
  }
}
