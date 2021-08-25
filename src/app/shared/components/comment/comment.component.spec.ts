import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { TimePipe } from "../../pipes/time.pipe";
import { Item } from "../../../data-model/interfaces";

import { CommentComponent } from "./comment.component";
import { By } from "@angular/platform-browser";

describe("CommentComponent", () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let expectedItem: Item;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MaterialModule],
      declarations: [CommentComponent, TimePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expectedItem = {
      id: 123,
      by: "author",
      time: 1175714200,
    };
    component.item = expectedItem;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should has author name", () => {
    const userLink = fixture.debugElement.query(By.css("a.user")).nativeElement;
    expect(userLink.text).toBe("author");
  });
  it("should have duration", () => {
    const timePipe = new TimePipe();
    const p = timePipe.transform(expectedItem.time, "fromNow");
    const timeLink =  fixture.debugElement.query(By.css(".time")).nativeElement;
    expect(timeLink.text).toBe(p);
  });
  it("should expand the kids section",()=>{
    component.isExpanded = false;
    fixture.detectChanges();
    let kidsSection = fixture.debugElement.query(By.css(".kidsSection"));
    expect(kidsSection).toBeNull();
    component.isExpanded = true;
    fixture.detectChanges();
    kidsSection = fixture.debugElement.query(By.css(".kidsSection"));
    
    expect(kidsSection).toBeTruthy();
  });
});
