import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { FormComponent } from './pages/form/form.component';
import { ProductListComponent } from './pages/product-list/product-list.component';


const routes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: '',
            pathComplete: 'products',
        },
        children: [
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: ':id',
                component: SearchComponent
            },
            {
                path: 'search',
                component: SearchComponent
            },            {
                path: 'shipping/rate',
                component: FormComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsCustomersRoutingModule { }
