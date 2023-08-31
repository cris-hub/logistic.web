import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [{
  path: '',
  data: {
    breadcrumb: '',
    pathComplete: 'profile',
  },
  children: [
    {
      path: '',
      component: DetailsComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
