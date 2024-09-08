import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(prouduct:any[] , name:string): any[] {
    return prouduct.filter( (item)=>item.title.toLowerCase().includes(name.toLowerCase()) );
  }

}
