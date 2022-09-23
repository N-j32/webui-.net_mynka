import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {
 //4
  transform(num:number): number {
    return num * num ; //4*4
  }

}
