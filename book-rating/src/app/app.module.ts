import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de-AT';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
// import { BooksModule } from './books/books.module';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BooksModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-AT' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
