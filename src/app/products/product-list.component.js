"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        this.pageTitle = "Product List";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.filterText = "cart";
        this.products = [
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
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: "app-products",
            templateUrl: "./product-list.component.html"
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
