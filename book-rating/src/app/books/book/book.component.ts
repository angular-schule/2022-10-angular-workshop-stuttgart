import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  // Output: Daten fließen von hier zur Elternkomponente
  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  // Input: hier fließen Daten von der Elternkomponente hinein
  @Input() book?: Book;

  constructor() {}

  ngOnChanges(): void {}

  ngOnInit(): void {}

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }

}
