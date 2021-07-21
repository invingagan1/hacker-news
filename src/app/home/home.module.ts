import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeSandboxService } from './home-sandbox.service';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AuthGuardService } from '../auth/auth-guard.service';


const routes: Routes = [
  {
    path:"", component: HomeComponent,
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MaterialModule],
  providers:[HomeSandboxService]
})
export class HomeModule {}
