import { Component } from '@angular/core';
import {Product} from "../../products";
import {ProductServiceService} from "../../product-service.service";
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products = [...products]

  constructor(private productService: ProductServiceService) {
  }

  products: Product[]=[];

  ngOnInit(): void {
    // this.refreshProductList();
    // console.log(this.productList)
    this.getProducts();

  }

  public getProducts(): void {
    this.productService.getProductList().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(this.products);
        console.log(this.products[0].imageUrl)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
