import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";


import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
import {ProductModule} from "./products/product.module";
import {ProductGuardService} from "./products/product-guard.service";
import {PageNotFoundComponent} from "./pageNotFound/page-not-found.component";
import {UserModule} from "./user/user.module";


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
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent}
    ]),
    ProductModule,
    UserModule
  ],
  providers: [ ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
