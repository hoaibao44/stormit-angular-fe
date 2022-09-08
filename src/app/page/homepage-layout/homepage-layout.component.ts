import { Component, OnInit } from '@angular/core';
import { CsButtonComponent } from '../../component/cs-button/cs-button.component'

@Component({
  selector: 'app-homepage-layout',
  templateUrl: './homepage-layout.component.html',
  styleUrls: ['./homepage-layout.component.scss']
})
export class HomepageLayoutComponent implements OnInit {

  isClicked:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  btn_click(){
    this.isClicked = !this.isClicked
  }

}
