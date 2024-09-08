import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splittext',
  standalone: true
})
export class SplittextPipe implements PipeTransform {

  transform(text: string, lmit:number) {
    return text.split(" ", lmit ).join(" ");
  }

}
