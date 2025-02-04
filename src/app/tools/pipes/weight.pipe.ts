import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight',
  standalone: false
})
export class WeightPipe implements PipeTransform {

  //? value is given in hectograms
  transform(value: number): string {
    if (value === 0) return "0 g";

    if (value < 10) {
      return `${value * 100} g`
    }

    return `${value / 10} kg`;
  }

}
