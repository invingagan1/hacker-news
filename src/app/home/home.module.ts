import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeSandboxService } from './home-sandbox.service';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


const routes: Routes = [
  {
    path:"", component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MaterialModule],
  providers:[HomeSandboxService]
})
export class HomeModule {}
