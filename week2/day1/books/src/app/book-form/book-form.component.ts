import { Component, Output, EventEmitter } from '@angular/core';

import { BookService } from '../services/book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})

export class BookFormComponent {
  @Output() bookEmitter = new EventEmitter<Book>();

  book: Book = new Book();

  constructor(private bookService: BookService) {}

  onSubmit(form): void {
    // event.preventDefault();

    console.log(this.book);

    // this.books.push(this.book);
    // this.bookEmitter.emit(this.book);

    this.bookService.createBook(this.book)
      .then(book => this.bookEmitter.emit(book))
      .then(() => this.book = new Book())
      .then(() => form.reset())
      .catch(console.log);
  }
}
