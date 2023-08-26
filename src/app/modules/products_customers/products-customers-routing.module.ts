import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: '',
            pathComplete: 'products',
        },
        children: [
            {
                path: ':id',
                component: SearchComponent
            },
            {
                path: 'search',
                component: SearchComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsCustomersRoutingModule { }
