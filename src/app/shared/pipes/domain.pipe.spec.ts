import { DomainPipe } from './domain.pipe';

describe('DomainPipe', () => {
  it('create an instance', () => {
    const pipe = new DomainPipe();
    expect(pipe).toBeTruthy();
  });
  it("should return the host ",()=>{
    const pipe = new DomainPipe();
    const urlString = "https://www.google.com/gmail";
    expect(pipe.transform(urlString, 'host')).toBe("www.google.com");

  });

  it("should return the domain from the url  ", () => {
    const pipe = new DomainPipe();
    const urlString = "https://www.google.com/gmail";
    expect(pipe.transform(urlString)).toBe("https://www.google.com");
  });

});
