
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <div>This is my first Angular App</div>
    </div>
  `
})

export class AppComponent {
  pageTitle = 'Acme Project Management';
}
