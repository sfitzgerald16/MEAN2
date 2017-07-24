import { Component, Input, Output, EventEmitter } from '@angular/core';

import { BookService } from '../services/book.service';
import { Book } from '../book';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
})

export class BookDetailsComponent {
  @Input() book: Book;

  @Output() updatedBook = new EventEmitter<Book>();

  constructor(private bookService: BookService) {}

  onUpdate(book: Book, event: Event) {
    event.preventDefault();
    console.log('updating book', book);

    // this.updatedBook.emit(book);

    this.bookService.updateBook(book)

      .then(updatedBook => this.updatedBook.emit(updatedBook))
      .catch(console.log);
  }

}
