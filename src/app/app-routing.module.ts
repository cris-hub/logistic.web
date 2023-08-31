import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginModule } from './modules/login/login.module';
import { ProductsCustomersModule } from './modules/products_customers/products-customers.module';
import { HomeComponent } from './pages/home/home.component';
import { SignupModule } from './modules/signup/signup.module';
import { ProfileModule } from './modules/profile/profile.module';





const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix',
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard],
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
  },
  {
    path: 'signup',
    component: MainLayoutComponent,
    loadChildren: () => SignupModule,
  },
  {
    path: 'products',
    component: MainLayoutComponent,
    loadChildren: () => ProductsCustomersModule,
  },
  {
    path: 'profile',
    component: MainLayoutComponent,
    loadChildren: () => ProfileModule,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
