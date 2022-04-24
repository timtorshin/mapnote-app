import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mn-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss'],
  host: {
    class: 'mn-place-card'
  }
})
export class PlaceCardComponent implements OnInit {
  public rating = new FormControl(3);

  constructor() {}

  ngOnInit(): void {}
}
