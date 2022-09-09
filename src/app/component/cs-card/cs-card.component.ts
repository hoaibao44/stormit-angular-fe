import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-card',
  templateUrl: './cs-card.component.html',
  //  template: `
  //   <div class="cs-card__container">
  //     <ng-content></ng-content>
  //   </div>
  // `,
  styleUrls: ['./cs-card.component.scss']
})
export class CsCardComponent implements OnInit {

  @Input() class:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
