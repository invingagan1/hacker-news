import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { UserSandboxService } from './user-sandbox.service';

const routes: Routes = [
  {
    path: ':username',
    component: UserComponent,
  },
];

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  providers:[UserSandboxService]
})
export class UserModule {}
