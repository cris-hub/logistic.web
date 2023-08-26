import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { BreadcrumbComponent } from './layouts/main-layout/utils/breadcrumb/breadcrumb.component';
import { FooterComponent } from './layouts/main-layout/utils/footer/footer.component';
import { HeaderComponent } from './layouts/main-layout/utils/header/header.component';
import { NavDashComponent } from './layouts/main-layout/utils/nav-dash/nav-dash.component';
import { SideNavComponent } from './layouts/main-layout/utils/sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SideNavComponent,
    FooterComponent,
    HeaderComponent,
    NavDashComponent,
    BreadcrumbComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
