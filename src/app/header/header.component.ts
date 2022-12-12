import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  
  document:any;
  constructor(@Inject(DOCUMENT) document: Document) { 
    this.document = document;
  }

  ngOnInit(): void {
  }

  burgerAnimation() {
    let element = this.document.getElementById('burger');
    element.classList.toggle('opened');element.setAttribute('aria-expanded', element.classList.contains('opened'))
  }

  toggleMobileMenu() {
    this.document.getElementById('mobile-menu').classList.toggle('fade');
    this.burgerAnimation();
  }
}
