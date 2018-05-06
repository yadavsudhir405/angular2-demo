import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
import {PageNotFoundComponent} from "./pageNotFound/page-not-found.component";
import {SlisComponent} from "./slis/slis.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "slis", component: SlisComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent}
    ]),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
