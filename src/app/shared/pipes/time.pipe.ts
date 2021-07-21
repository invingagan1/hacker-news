import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(unixTime: number | undefined, ...args: string[]): string {
    let result = ''
    if( unixTime && args[0] === "fromNow"){
      result = moment(unixTime  * 1000).fromNow();
    }else if(unixTime){
      result = new Date(unixTime * 1000).toLocaleString();
    }
    return result;
  }

}
