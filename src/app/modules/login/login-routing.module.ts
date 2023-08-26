import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/home/login.component';


const routes: Routes = [
  {
    path: '',
    data : {
      breadcrumb: '',
      pathComplete : 'login',
    },
    children: [
      {
        path: '',
        component: LoginComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
