import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'matchDate'})
export class MatchDatePipe implements PipeTransform {
  transform(date: string | null) {
    if (date != null) {
      const arr = date?.split(' ').filter((value, index) => index != 2 && index != 3 && index != 5);
      arr[0] += ' '
      arr[1] += ', '
      arr[2] = arr[2].slice(0,5)      

      return arr.join('')
    }
    
    return date
  }
}