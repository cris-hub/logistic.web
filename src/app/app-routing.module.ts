import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { MainLayoutComponent } from 'src/layouts/main-layout/main-layout.component';
import { LoginModule } from 'src/modules/login/login.module';
import { HomeComponent } from 'src/pages/home/home.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix',
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: null
    },
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'login',
    component: MainLayoutComponent,
    loadChildren: () => LoginModule,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
