import { Component } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})

export class BookListComponent {
  books: Array<Book> = [{
    id: 6,
    title: 'Slaughter House 5',
    pages: 354,
    year: 1972,
    author: 'Kurt Vonnegut',
    publisher: 'random house'
  }];
}


