import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { gsap } from 'gsap';

const plugins = [gsap];

@Component({
  selector: 'app-homepage-layout',
  templateUrl: './homepage-layout.component.html',
  styleUrls: ['./homepage-layout.component.scss']
})
export class HomepageLayoutComponent implements OnInit {

  @ViewChild('targetCard1') targetCard1!:ElementRef;

  isClicked:boolean = false;

  constructor() { }

  ngOnInit(): void { }

  btn_click(){
    this.isClicked = !this.isClicked    
    this.layerAnimation()
  }

  layerAnimation(){
    gsap.fromTo([this.targetCard1.nativeElement],
      {autoAlpha:0},
      {autoAlpha:1,duration:1,stagger:0.8}
    )
  }

}
