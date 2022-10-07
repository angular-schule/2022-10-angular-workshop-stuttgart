import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private rs: BookRatingService, private bs: BookStoreService) {
    this.bs.getAll().subscribe(books => {
      this.books = books;
    });

    /*this.bs.getAll().subscribe({
      next: books => {
        this.books = books;
      },
      error: err => {
        console.error('FEHLER:', err)
      }
    });*/
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book) {
    /*const index = this.books.findIndex(book => book.isbn === ratedBook.isbn);
    const copiedList = [...this.books];
    copiedList[index] = ratedBook;
    this.books = copiedList;*/

    this.books = this.books.map(book => {
      if (book.isbn === ratedBook.isbn) {
        return ratedBook;
      } else {
        return book;
      }
    });

    // this.books = this.books.map(book => book.isbn === ratedBook.isbn ? ratedBook : book);

    // const result = [1,2,3,4,5].map(e => e * 10); // [10, 20, 30, 40, 50]
    // const result = [1,2,3,4,5].filter(e => e % 2 === 0); // [2, 4]
  }

  ngOnInit(): void {
  }

}


/*
isbn
authors
title
publisher
pages
price
thumbnailUrl
description
subtitle

*/
/*
class BookC implements BookI {
  rating = 5;
  constructor(public isbn: string, public title: string) {}

  rateUp() {
    this.rating++;
  }
}


const myBook = new BookC('123', 'Angular');
myBook.rateUp();

//////////


interface BookI {
  isbn: string;
  title: string;
  rating: number;
}

const myBook2: BookI = {
  isbn: '123',
  title: 'Angular',
  rating: 5,
};

function rateUp(book: BookI): BookI {
  book.rating++;
  return book;
}*/
