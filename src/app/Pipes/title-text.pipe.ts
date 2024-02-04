import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleText'
})
export class TitleTextPipe implements PipeTransform {

  transform(productTitle:string): string {
    return `Sale ${productTitle}`;
  }

}
