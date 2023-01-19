import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  
  document:any;
  constructor(@Inject(DOCUMENT) document: Document, private viewportScroller: ViewportScroller,
  public router: Router) { 
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


  onClickScroll(elementId: string): void {
    console.log
    this.router.navigate(['/']);
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 100);
  }
}
