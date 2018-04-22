import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { ConvertToSpacePipe } from "./shared/convert-to-space-pipe";


import { AppComponent } from "./app.component";
import {ProductListComponent} from "./products/product-list.component";
import { StarComponent } from "./shared/star.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetail } from './products/product-detail.component/product-detail.component.component';
import { ProductDetailComponentComponent } from './products/product-detail-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetail.ComponentComponent,
    ProductDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
