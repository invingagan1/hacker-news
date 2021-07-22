import * as moment from "moment";
import { TimePipe } from "./time.pipe";

describe("TimePipe", () => {
  it("create an instance", () => {
    const pipe = new TimePipe();
    expect(pipe).toBeTruthy();
  });

  it("should return time for Unix time 1626936540 ", () => {
    const pipe = new TimePipe();
    const date = new Date(1626936540 * 1000);

    const timeString = pipe.transform(1626936540);
    expect(timeString).toBe(date.toLocaleString());
  });

  it("should return from now for the unix time  1626936540 ", () => {
    const pipe = new TimePipe();
    const timeString = pipe.transform(1626936540, "fromNow");
    expect(timeString).toBe(moment(1626936540 * 1000).fromNow());
  });
});
