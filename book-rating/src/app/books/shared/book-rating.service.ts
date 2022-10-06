import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() {}

  // Pure Function
  // - seiteneffektfrei
  // - stateless / deterministisch / idempotent
  //

  rateUp(book: Book): Book {
    // Early Exit
    // wenn Buch nicht verändert wird, müssen wir es auch nicht klonen
    if (book.rating >= 5) {
      return book;
    }

    return {
      ...book,
      // rating: Math.min(book.rating + 1, 5)
      // rating: book.rating === 5 ? 5 : book.rating + 1
      rating: book.rating + 1
    }
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: Math.max(book.rating - 1, 1)
    };
  }
}
