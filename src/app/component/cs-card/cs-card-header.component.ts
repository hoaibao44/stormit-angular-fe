import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-card-header',
  template: `
    <div class="cs-card__header">
        <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./cs-card.component.scss']
})
export class CsCardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
