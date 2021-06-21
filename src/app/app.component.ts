import { Component,OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductsService } from './services/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KocApp';
  products: Product[] = [];

  constructor(private productService : ProductsService) {}

  totalLength : any;
  p:any ;

  ngOnInit()
  {
    this.productService.getProducts()
    .subscribe(
      (data) => {
        this.products = data;
        this.totalLength = data.length
        console.log(this.products)

        return data;
      }
    )
  }
  
}
