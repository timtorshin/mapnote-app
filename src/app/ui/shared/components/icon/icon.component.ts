import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mn-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input()
  public iconName: "close" | null = null;

  constructor() {}

  public ngOnInit(): void {
    if (this.iconName === null) {
      throw new TypeError(`"iconName" is required input parameter`);
    }
  }
}
