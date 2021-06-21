import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  title = 'KocApp';
  products: Product[] = [];

  constructor(private productService : ProductsService) {}

  totalLength : any;
  p:any ;
  productName = '';

  ngOnInit()
  {
    this.productService.getProducts()
    .subscribe(
      (data) => {
        this.products = data;
        this.totalLength = data.length
        console.log(this.products)      }
    )
  }

}
