import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsCustomersRoutingModule } from './products-customers-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { FormComponent } from './pages/form/form.component';
import { ConveyanceService } from 'src/app/core/services/transport/conveyance.service';



@NgModule({
    declarations: [SearchComponent, ProductDetailComponent, ProductListComponent, FormComponent],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        ProductsCustomersRoutingModule
    ],
    providers: [CurrencyPipe,ConveyanceService]
})
export class ProductsCustomersModule { }
