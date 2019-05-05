import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Beer } from 'src/app/core/models/beer/beer.model';

@Component({
  selector: 'app-beer-profile-card',
  templateUrl: './beer-profile-card.component.html',
  styleUrls: ['./beer-profile-card.component.scss'],
})
export class BeerProfileCardComponent {
  private beerInput: Beer | undefined;
  @Input() set beer(b: Beer | undefined) {
    this.beerInput = b;
  }

  @Output() clicked = new EventEmitter();
  get beer(): Beer | undefined {
    return this.beerInput;
  }

  constructor() {}

  beerClicked() {
    this.clicked.emit();
  }
}
