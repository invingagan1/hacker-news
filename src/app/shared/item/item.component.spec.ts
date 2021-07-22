import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "src/app/header/header.module";
import { HeaderComponent } from "src/app/header/header/header.component";
import { MaterialModule } from "src/app/material/material.module";
import { TimePipe } from "../pipes/time.pipe";

import { ItemComponent } from "./item.component";

describe("ItemComponent", () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemComponent, TimePipe],
      imports: [MaterialModule, RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
