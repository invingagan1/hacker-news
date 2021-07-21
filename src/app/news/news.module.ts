import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { NewsSandboxService } from './news-sandbox.service';

const routes: Routes = [
  {
    path: ':id',
    component: NewsComponent,
  },
];

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  providers: [NewsSandboxService],
})
export class ItemModule {}
