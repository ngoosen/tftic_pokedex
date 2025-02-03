import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokeball',
  standalone: false,

  templateUrl: './pokeball.component.html',
  styleUrl: './pokeball.component.scss'
})
export class PokeballComponent {
  @Input() animationDelay: number = 0;
}
