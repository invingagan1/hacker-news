import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { UtilityService } from './utility.service';
import { DomainPipe } from './pipes/domain.pipe';
import { TimePipe } from './pipes/time.pipe';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    ItemComponent,
    DomainPipe,
    TimePipe,
    CommentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule  
  ],
  exports:[
    ItemComponent,
    DomainPipe,
    TimePipe,
    CommentComponent
  ],
  providers: [
    UtilityService
  ]
})
export class SharedModule { }
