import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-card-footer',
  template: `
    <div class="cs-card__footer">
        <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./cs-card.component.scss']
})
export class CsCardFoooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
