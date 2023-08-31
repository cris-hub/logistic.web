import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Conveyance } from 'src/app/core/models/conveyance';
import { Place } from 'src/app/core/models/place';
import { Product } from 'src/app/core/models/product';
import { PlaceService } from 'src/app/core/services/places/place.service';
import { ProductService } from 'src/app/core/services/products/product.service';
import { ConveyanceService } from 'src/app/core/services/transport/conveyance.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  conveyances: Conveyance[] = [];
  places: Place[] = [];
  product!: Product ;
  productCreated!: Product;
  form!: FormGroup;
  constructor(private productService: ProductService, private conveyanceCervice: ConveyanceService, private placesService: PlaceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.conveyanceCervice.getConveyances().subscribe(conveyanceResponse => this.conveyances = conveyanceResponse)
    this.placesService.getPlaces().subscribe(placesResponse => this.places = placesResponse)

    this.form = this.formBuilder.group({
      placeId: ['', [Validators.required]],
      conveyanceId: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      deliveryDay: [new Date(), [Validators.required]],
      productType: ["", [Validators.required]],
      price: [0, [Validators.required]],
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.product = { ...this.form.value }
      this.productService.CreateProduct(this.product).subscribe(producCreationResponse => this.productCreated = producCreationResponse);
    }
  }
}
