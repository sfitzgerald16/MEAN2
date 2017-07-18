import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})

export class BookFormComponent {
  @Output() bookEmitter = new EventEmitter<Book>();

  book: Book = new Book();

  onSubmit(event: Event): void {
    event.preventDefault();

    console.log(this.book);

    // this.books.push(this.book);
    this.bookEmitter.emit(this.book);

    this.book = new Book();
  }
}
