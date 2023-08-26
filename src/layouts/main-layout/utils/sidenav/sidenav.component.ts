import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],

})
export class SideNavComponent implements OnInit {
  @Input() isOpemSideNav?: boolean;
  @ViewChild('sidenav') sidenav?: MatSidenav;


  ngOnInit(): void {
  }


  reason = 'sdasda';

  close(reason: string) {
    this.reason = reason;
    this.sidenav?.close();
  }
  open(reason: string) {
    this.reason = reason;
    this.sidenav?.open();
  }




}
