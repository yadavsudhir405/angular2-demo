import {Component} from '@angular/core';
@Component({
  selector : 'app-root',
  template : `
  <div>
    <h1>This is my First Angular page {{pageTitle}}</h1>
    <app-products></app-products>
  </div>
  `
})
export class AppComponent {
  pageTitle  = 'Aceme Project Management';
}
