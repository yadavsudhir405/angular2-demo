import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {ProductDetailComponent} from "./product-detail-component";
import {StarComponent} from "../shared/star.component";
import {ConvertToSpacePipe} from "../shared/convert-to-space-pipe";
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
  providers: [ ProductService, ProductGuardService]
})
export class ProductModule { }
