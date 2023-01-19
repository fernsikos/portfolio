import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(
    private viewportScroller: ViewportScroller,
    public router: Router
  ) { }

  ngOnInit(): void {
    AOS.init()
  }

  onClickScroll(elementId: string): void {
    console.log
    this.router.navigate(['/']);
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 100);
  }

}
