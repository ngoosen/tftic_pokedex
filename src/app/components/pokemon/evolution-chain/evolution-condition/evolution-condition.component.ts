import { Component, Input } from '@angular/core';
import { EvolutionDetails } from '../../../../models/evolutionChain.model';

@Component({
  selector: 'app-evolution-condition',
  standalone: false,

  templateUrl: './evolution-condition.component.html',
  styleUrl: './evolution-condition.component.scss'
})
export class EvolutionConditionComponent {
  @Input() evolutionDetails!: EvolutionDetails[];

  showTooltip: boolean = false;

  openTooltip() {
    this.showTooltip = true;
  }

  closeTooltip() {
    this.showTooltip = false;
  }
}
