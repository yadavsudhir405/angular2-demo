import {Component} from "@angular/core";
import { ProductService } from "./products/product.service";
@Component({
  selector : "app-root",
  providers: [ ],
  template : `
  <div>
    <div>
      <nav class="nav navbar-default">
        <div class="container-fluid">
          <a class="navbar-brand">{{ pageTitle }}</a>
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['/welcome']"> Home </a></li>
            <li><a [routerLink]="['/products']"> Product List </a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <div class="container">
      <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle  = "Aceme Project Management";
}
