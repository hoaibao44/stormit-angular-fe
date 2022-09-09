import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-button',
  templateUrl: './cs-button.component.html',
  styleUrls: ['./cs-button.component.scss']
})
export class CsButtonComponent implements OnInit {
  @Input() textString:string = 'Button'; 
  @Input() btnStyle:string = 'primary'; 
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.textString)
  }

}
