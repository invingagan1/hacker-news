import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./api.service";
import { Item, ItemId, User } from "../data-model/interfaces";

describe("ApiService", () => {
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService],
    });
    apiService = TestBed.inject(ApiService);
  });

  it("should be created", () => {
    expect(apiService).toBeTruthy();
  });

  it("should have 5 items", (done) => {
    apiService.getTopStories(0, 5).then((items: ItemId[]) => {
      console.log(items);
      expect(items.length).toBe(5);
      done();
    });
  });

  it("should have 10 items", (done) => {
    apiService.getTopStories(0, 10).then((items: ItemId[]) => {
      console.log(items);
      expect(items.length).toBe(10);
      done();
    });
  });

  it("should get the user 'kalleth' ", (done) => {
    const testUser: User = {
      id: "kalleth",
      created: 1349777914,
    };

    apiService.getUser("kalleth").then((user: User) => {
      expect(user.id).toBe(testUser.id);
      expect(user.created).toBe(testUser.created);
      done();
    });
  });

  it("should have item of 27906886.json ", (done) => {
    
    const testItem: Item = {
      id: 27906886,
      by: "kalleth",
      title: "Planning and estimating large-scale software projects",
    };
    apiService.getItem(27906886)
    .then((item:Item) => {
        expect(item.by).toBe(testItem.by);
        expect(item.id).toBe(testItem.id);
        expect(item.title).toBe(testItem.title);
        done();
    });

  });
});
