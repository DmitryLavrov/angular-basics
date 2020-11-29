import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exMarks'
})
export class ExMarksPipe implements PipeTransform {

  transform(str: String): string {
    return `${str.trim()}!!!`;
  }

}
