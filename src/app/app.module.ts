import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from 'src/layouts/main-layout/main-layout.component';
import { BreadcrumbComponent } from 'src/layouts/main-layout/utils/breadcrumb/breadcrumb.component';
import { FooterComponent } from 'src/layouts/main-layout/utils/footer/footer.component';
import { HeaderComponent } from 'src/layouts/main-layout/utils/header/header.component';
import { NavDashComponent } from 'src/layouts/main-layout/utils/nav-dash/nav-dash.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from 'src/layouts/main-layout/utils/sidenav/sidenav.component';



import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SideNavComponent,
    FooterComponent,
    HeaderComponent,
    NavDashComponent,
    BreadcrumbComponent
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
