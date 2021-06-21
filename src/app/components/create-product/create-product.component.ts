import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productService : ProductsService,
    private toastr : ToastrService
    ) { }

  onSubmit(formData:Product){
    console.log(formData)
    this.productService.createProduct(formData)
        .subscribe(
          response => this.toastr.success('Product Added','Success'),
          error => this.toastr.error(error,'Error!'),       
        );
  }

  ngOnInit(): void {
  }

}
