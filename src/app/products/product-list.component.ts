import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import { ProductService } from "./product.service";
@Component({
  selector: "app-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle = "Product List";
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  filterText = "cart";
  products: IProduct[] ;
  constructor(private _product_Service: ProductService) {
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this._product_Service.getProducts();
    this.filterText = 'cart';
  }
}
