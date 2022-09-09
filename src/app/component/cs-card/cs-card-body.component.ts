import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-card-body',
  template: `
    <div class="cs-card__body">
        <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./cs-card.component.scss']
})
export class CsCardBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
