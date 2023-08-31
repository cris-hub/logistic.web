import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/products/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'productType','amount', 'price','discount','finalPrice', 'place','conveyance'];
  products!: Product[];

  /**
   *
   */
  constructor(private productService:ProductService) {
    
  }
  ngOnInit(): void {
    this.productService.GetAllMyProducts().subscribe(productsResponse => this.products = productsResponse );
  }
}
