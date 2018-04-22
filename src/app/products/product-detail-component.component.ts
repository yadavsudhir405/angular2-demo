import { Component, OnInit } from "@angular/core";
import {IProduct} from "./product";

@Component({
  templateUrl: "./product-detail-component.component.html",
  styleUrls: ["./product-detail-component.component.css"]
})
export class ProductDetailComponentComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;
  constructor() { }

  ngOnInit() {
  }

}
