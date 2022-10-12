import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, switchMap } from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book?: Book;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {
    // PULL / Synchroner Weg
    // const isbn = this.route.snapshot.paramMap.get('isbn'); // books/:isbn

    // PUSH / Asynchroner Weg

    this.route.paramMap.pipe(
      map(params => params.get('isbn')!),
      switchMap(isbn => this.bs.getSingle(isbn))
    ).subscribe(book => {
      this.book = book;
    });



  }

}
