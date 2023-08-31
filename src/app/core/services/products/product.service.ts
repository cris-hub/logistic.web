import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  GetAllMyProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/product`);
  }

  GetProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/product/${id}`);
  }
  CreateProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/product`, product);
  }

  constructor(private http: HttpClient) { }
}
