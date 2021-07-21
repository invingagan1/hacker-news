import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain',
})
export class DomainPipe implements PipeTransform {
  transform(url: string | undefined, ...arg: string[]): string {
    let result = '';
    
    if (url) {
      const u = new URL(url);
      if (arg[0] === 'host') {
        result = u.hostname
      } else {
        result = u.origin;
      }
    }
    return result;
  }
}
