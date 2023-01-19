import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introducion',
  templateUrl: './introducion.component.html',
  styleUrls: ['./introducion.component.scss']
})
export class IntroducionComponent implements OnInit {

  constructor(
    private viewportScroller: ViewportScroller,
    public router: Router
    ) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId: string): void {
    console.log
    this.router.navigate(['/']);
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 100);
  }
}
