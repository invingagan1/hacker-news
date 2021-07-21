import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { ApiService } from "../api/api.service";
import { HomeSandboxService } from "./home-sandbox.service";

describe("HomeSandboxService", () => {
  let service: HomeSandboxService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HomeSandboxService, ApiService, HttpClient],
    });
    service = TestBed.inject(HomeSandboxService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should get 5 items ", (done) => {
    service.getTopStories().then(() => {
      const subscription = service.topStories.subscribe((items) => {
        expect(items.length).toBe(5);
        done();
        subscription.unsubscribe();
      });
    });
  });
  it("should have 10 item on selecting 'more' ", (done) => {
    service.getTopStories().then(() => {
      service.more().then(() => {
        const subscription = service.topStories.subscribe((items) => {
          expect(items.length).toBe(10);
          done();
          subscription.unsubscribe();
        });
      });
    });
  });
});
