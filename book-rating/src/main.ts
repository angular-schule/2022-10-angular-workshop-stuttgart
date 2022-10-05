import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



////////////////////

/*
export class Customer {
  // private id: number;
  // constructor(id: number) {
  //   this.id = id;
  // }

  constructor(private id: number) {}

  fooBar(foo: string): number {
    setTimeout(() => {
      console.log('Hallo', this.id);
    }, 2000);


    return 6;
  }
}

const myCustomer = new Customer(5);
myCustomer.fooBar('');

*/
