import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsMinutes'
})
export class SecondsMinutesPipe implements PipeTransform {

  transform(value: any): any {
    const minutes: number = Math.floor(value / 60);
    return minutes.toString().padStart(2, '0') + ':' + (value - minutes * 60).toString().padStart(2, '0');
  }

}
