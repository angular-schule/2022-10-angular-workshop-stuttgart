import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() {}

  rateUp(book: Book): Book {
    // TODO
    return book;
  }

  rateDown(book: Book): Book {
    // TODO
    return book;
  }
}
