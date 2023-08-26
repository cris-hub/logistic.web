import { Component, OnInit, ViewChild } from '@angular/core';
import { SideNavComponent } from './utils/sidenav/sidenav.component';
import { User } from 'src/core/models/user';
import { LocalStorageService } from 'src/core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @ViewChild(SideNavComponent) side?: SideNavComponent;
  user?: User;

  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {
    this.user = this.storage.parseItem<User>("currentUser");
  }


  toggleSideNav(isOpemSideNav: boolean): void {
    isOpemSideNav ? this.side?.close("close") : this.side?.open("open")
  }

}
