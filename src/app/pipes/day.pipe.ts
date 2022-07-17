import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const a = new Date(+value * 1000);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', "Fri", 'Sat'];

    return days[a.getDay()];
  }

}
