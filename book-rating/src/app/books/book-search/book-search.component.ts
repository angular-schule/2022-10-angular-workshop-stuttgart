import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchControl = new FormControl('', { nonNullable: true });

  loading = false;

  books$ = this.searchControl.valueChanges.pipe(
    filter(term => term.length >= 3),
    debounceTime(1000),
    distinctUntilChanged(),
    tap(() => this.loading = true),
    switchMap(term => this.bs.search(term)),
    tap(() => this.loading = false),
  );

  constructor(private bs: BookStoreService) {}

  ngOnInit(): void {
  }

}
