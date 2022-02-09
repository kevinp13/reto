import { Component, HostListener, Input, OnInit } from '@angular/core';
import { faBars, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faEllipsisH = faEllipsisH;
  faBars = faBars;
  headerScrolled: boolean;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY >= 78) {

      this.headerScrolled = true;
    } else {
      this.headerScrolled = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
