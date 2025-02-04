import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height',
  standalone: false
})
export class HeightPipe implements PipeTransform {

  //? value is given in decimetres
  transform(value: number): string {
    if (value === 0) return "0 cm";

    if (value > 10) {
      return `${value / 10} m`
    }

    return `${value * 10} cm`;
  }

}
