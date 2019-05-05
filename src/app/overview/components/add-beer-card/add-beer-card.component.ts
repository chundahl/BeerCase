import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-beer-card',
  templateUrl: './add-beer-card.component.html',
  styleUrls: ['./add-beer-card.component.scss'],
})
export class AddBeerCardComponent implements OnInit {
  @Output() newBeer = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  cardClicked() {
    this.newBeer.emit();
  }
}
