import {Component} from "@angular/core";
@Component({
  selector: "app-products",
  templateUrl: "./product-list.component.html"
})
export class ProductListComponent {
  pageTitle = "Product List";
  imageWidth = 50;
  imageMargin = 2;
  products: any[];
  showImage = false;
  filterText = "cart";
  products = [
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
}
