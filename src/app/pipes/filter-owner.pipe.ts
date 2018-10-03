import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'filterOwner'
})
export class FilterOwnerPipe implements PipeTransform {

  transform(sourceList: any, ownerText: any): any {
    if(!ownerText) {
      return sourceList;
    }
    console.log(`Pipe filterOwner: ${ownerText}`)
    return sourceList.filter(order => order.userid === ownerText);
  }

}
