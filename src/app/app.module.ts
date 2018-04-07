import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { ConvertToSpacePipe } from "./shared/convert-to-space-pipe";


import { AppComponent } from "./app.component";
import {ProductListComponent} from "./products/product-list.component";
import { StarComponent } from "./shared/star.component";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
