import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value > 59) {
      const minutes: number = Math.floor(value / 60);
      const seconds: number = Math.floor(value % 60);
      return `${minutes} min ${seconds} sec`; 
    }
    return value + ' sec';
  }

}
