import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'matchDate'})
export class MatchDatePipe implements PipeTransform {
  public transform(date: string | null): string | null {
    if (date) {
      const dateArr = date.split(',')
      
      if (dateArr[0].endsWith('т')) {
        dateArr[0] += 'а'
      } else {
        dateArr[0] = dateArr[0].slice(0, -1) + 'я'
      }

      return dateArr.join(',')
    }
    
    return date
  }
}