import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  myText = 'Hallo Welt';
  book = {
    title: '',
    description: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
