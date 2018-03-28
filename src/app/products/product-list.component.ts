import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
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
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden cart",
      "productCode": "GDN-234",
      "releaseDate": "March 15,2018",
      "description": "This is product description",
      "price": 1233,
      "starRating": 4.2,
      "imageUrl": "../assets/images/garden-cart.png"
    },
    {

      "productId": 3,
      "productName": "Hammer",
      "productCode": "GDN-23",
      "releaseDate": "January 26,2018",
      "description": "This is product description",
      "price": 1233,
      "starRating": 4.2,
      "imageUrl": "../assets/images/hammer.png"

    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("Product-list component is initialized");
  }
}
