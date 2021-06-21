import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  url = "https://localhost:44349/api/product";

  getProducts(): Observable<any>
  {
    return this.http.get<Product[]>(this.url);
  }

  createProduct(productData: Product){
    return this.http.post<any>(this.url, productData)
  }

}
