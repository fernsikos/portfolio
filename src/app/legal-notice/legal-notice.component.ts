import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {

  constructor(
    public router: Router,
    private viewportScroller: ViewportScroller,
  ) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId: string): void {
    console.log
    this.router.navigate(['/legal-notice/']);
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 100);
  }
}
