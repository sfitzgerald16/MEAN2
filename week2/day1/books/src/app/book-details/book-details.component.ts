import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { BookService } from '../services/book.service';
import { Book } from '../book';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
})

export class BookDetailsComponent implements OnInit {
  // @Input()
  book: Book;

  @Output() updatedBook = new EventEmitter<Book>();

  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('on init')
    const waht = this.route.paramMap
      .switchMap(param =>
        this.bookService.getBook(param.get('_id'))
      )
      .subscribe(book => this.book = book);
  }

  onUpdate(book: Book, event: Event) {
    event.preventDefault();
    console.log('updating book', book);

    // this.updatedBook.emit(book);

    this.bookService.updateBook(book)

      .then(updatedBook => this.updatedBook.emit(updatedBook))
      .catch(console.log);
  }

}
