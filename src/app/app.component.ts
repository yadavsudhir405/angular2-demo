import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
  <div>
    <h1>{{pageTitle}}</h1>
    <div>This is my First Angular App</div>
  </div>
  `

})

export class AppComponent {
  pageTitle = 'Aceme Project Management';
}


