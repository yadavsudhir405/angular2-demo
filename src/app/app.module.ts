import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";


import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {ProductModule} from "./products/product.module";
import {ProductGuardService} from "./products/product-guard.service";
import {UserModule} from "./user/user.module";
import {AppRoutingModule} from "./app-routing.module";
import {WelcomeComponent} from "./home/welcome.component";
import {MatCardModule, MatRadioModule} from "@angular/material";
import {TreeModule} from "angular-tree-component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { SlisComponent } from './slis/slis.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ModalBasicComponent,
    SlisComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatCardModule,
    TreeModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [ ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
