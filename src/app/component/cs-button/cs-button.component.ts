import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-button',
  templateUrl: './cs-button.component.html',
  styleUrls: ['./cs-button.component.scss']
})
export class CsButtonComponent implements OnInit {
  @Input() btnStyle:string = 'primary'; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
