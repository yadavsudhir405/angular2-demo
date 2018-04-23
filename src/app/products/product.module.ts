import { NgModule } from "@angular/core";
import {ProductDetailComponent} from "./product-detail-component";
import {ProductListComponent} from "./product-list.component";
import {ProductService} from "./product.service";
import {RouterModule} from "@angular/router";
import {ProductGuardService} from "./product-guard.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      { path: "products/:id", canActivate: [ProductGuardService], component: ProductDetailComponent }]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [ ProductService]
})
export class ProductModule { }
