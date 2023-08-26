import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginModule } from './modules/login/login.module';
import { ProductsCustomersModule } from './modules/products_customers/products-customers.module';
import { HomeComponent } from './pages/home/home.component';





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
    path: 'products',
    component: MainLayoutComponent,
    loadChildren: () => ProductsCustomersModule,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
