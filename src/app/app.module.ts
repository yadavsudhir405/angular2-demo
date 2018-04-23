import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { ConvertToSpacePipe } from "./shared/convert-to-space-pipe";


import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
import {ProductModule} from "./products/product.module";
import {ProductGuardService} from "./products/product-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" }
    ]),
    ProductModule
  ],
  providers: [ ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
