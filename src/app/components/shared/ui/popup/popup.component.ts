import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: false,

  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Output() onClose!: EventEmitter<void>;

  constructor () {
    this.onClose = new EventEmitter<void>();
  }

  ngOnInit() {
    document.body.classList.add("no_scroll");
  }

  close() {
    document.body.classList.remove("no_scroll");
    this.onClose.emit();
  }
}
