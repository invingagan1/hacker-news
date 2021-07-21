import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewComponent } from "./new/new.component";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material/material.module";
import { RouterModule, Routes } from "@angular/router";
import { NewSandboxService } from "./new-sandbox.service";

const routes: Routes = [
  {
    path: "",
    component: NewComponent,
  },
];

@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    NewSandboxService
  ]
})
export class NewModule {}
