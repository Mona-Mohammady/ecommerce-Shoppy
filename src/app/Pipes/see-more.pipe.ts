import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(productTitle:string , limit:number): string {
    return productTitle.split(' ').slice(0,limit).join(' ');
  }

}
