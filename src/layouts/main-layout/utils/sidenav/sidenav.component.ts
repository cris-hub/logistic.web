import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { User } from 'src/core/models/user';
import { LocalStorageService } from 'src/core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],

})
export class SideNavComponent implements OnInit {
  @ViewChild('sidenav') sidenav?: MatSidenav;
  @Output() logout: EventEmitter<boolean> = new EventEmitter();
  @Input() isOpemSideNav?: boolean;
  @Input() user?: User;

  constructor() { }

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
