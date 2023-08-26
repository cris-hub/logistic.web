import { Component, OnInit, ViewChild } from '@angular/core';
import { SideNavComponent } from './utils/sidenav/sidenav.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @ViewChild(SideNavComponent) side?: SideNavComponent;
  constructor() { }

  ngOnInit() {
  }

  toggleSideNav(isOpemSideNav: boolean): void {
    isOpemSideNav ? this.side?.close("close") : this.side?.open("open")
  }

}
