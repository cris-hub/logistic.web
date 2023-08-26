import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsCustomersRoutingModule } from './products-customers-routing.module';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
    declarations: [SearchComponent],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        ProductsCustomersRoutingModule
    ],
    providers: [CurrencyPipe]
})
export class ProductsCustomersModule { }
