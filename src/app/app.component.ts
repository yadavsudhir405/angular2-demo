import {Component} from "@angular/core";
import { ProductService } from "./products/product.service";
@Component({
  selector : "app-root",
  providers: [ ProductService ],
  template : `
  <div>
    <h1>This is my First Angular page {{pageTitle}}</h1>
    <app-products></app-products>
  </div>
  `
})
export class AppComponent {
  pageTitle  = "Aceme Project Management";
}
