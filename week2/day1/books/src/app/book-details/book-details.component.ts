import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
})

export class BookDetailsComponent {
  @Input() book: Book;

  @Output() updatedBook = new EventEmitter<Book>();

  onUpdate(book: Book, event: Event) {
    event.preventDefault();
    console.log('updateing book', book);

    this.updatedBook.emit(book);
  }

}
