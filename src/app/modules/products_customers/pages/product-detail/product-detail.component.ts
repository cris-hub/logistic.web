import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  form!: FormGroup;

  @Input()
  product!: Product;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      placeId: [this.product.placeId, [Validators.required]],
      place: [`${this.product.place.city}-${this.product.place.country}`, [Validators.required]],
      conveyanceId: [this.product.conveyanceId, [Validators.required]],
      conveyance: [`${this.product.conveyance.id}-${this.product.conveyance.transportTypeValue}`, [Validators.required]],
      amount: [this.product.amount, [Validators.required]],
      deliveryDay: [this.product.deliveryDay, [Validators.required]],
      productType: [this.product.productType, [Validators.required]],
      price: [this.product.price, [Validators.required]],
    })
    this.form.disable()

    
  }
}
