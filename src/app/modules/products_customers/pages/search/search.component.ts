import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/products/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  productCreated !: Product;
  id: string = "";
  form: any;


  constructor(private productService: ProductService, private activaedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.activaedRoute.params.subscribe(c => {
      this.id = c['id'];
      this.getProductById();
    })
    this.form = this.formBuilder.group({
      id: [this.id,],
    });
  }
  private getProductById() {
    if (this.id)
      this.productService.GetProductById(this.id).subscribe(productResponse => {
        this.productCreated = productResponse;
      });
  }

  onSubmit() {
    this.id = this.form.get("id").value;
    this.router.navigate([`products/${this.id}`])
  }

}
