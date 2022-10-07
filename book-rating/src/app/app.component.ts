import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template: '<h1>FOO</h1>', // Inline Template
  // styles: ['h1.foo { color: blue }'] // Inline Style
})
export class AppComponent {
  title = 'Book Rating!';

  constructor() {
    /*setTimeout(() => {
      this.title = 'Hallo Welt';
    }, 2000);*/
  }
}
