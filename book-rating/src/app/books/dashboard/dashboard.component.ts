import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor() {
    // diese Liste werden wir später per HTTP laden!
    this.books = [
      {
        isbn: '1234',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        price: 36.9,
        rating: 5
      },
      {
        isbn: '5678',
        title: 'Vue.js',
        description: 'Das grüne Framework',
        price: 32.9,
        rating: 2
      }
    ];
  }

  doRateUp(book: Book) {
    console.log('UP', book);
  }

  doRateDown(book: Book) {
    console.log('DOWN', book);
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
