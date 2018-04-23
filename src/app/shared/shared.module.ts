import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {StarComponent} from "./star.component";
import {ConvertToSpacePipe} from "./convert-to-space-pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    ConvertToSpacePipe,
  ],
  declarations: [
    StarComponent,
    ConvertToSpacePipe,
  ]
})
export class SharedModule { }
