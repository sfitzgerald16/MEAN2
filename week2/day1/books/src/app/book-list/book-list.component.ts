import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { TitleizePipe } from '../titleize.pipe';
import { BOOKS } from '../data/books.data';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe]
})

export class BookListComponent implements OnInit {
  books: Array<Book> = BOOKS;

  selectedBook: Book;


  constructor(private titleize: TitleizePipe) {
  }

  ngOnInit() {
    this.titleCaseAuthors();
  }

  titleCaseAuthors(): void {
    this.books.forEach(book => {
      book.author = this.titleize.transform(book.author);
    });
  }

  bookListener(book: Book): void {
    console.log('INSIDE BOOK LISTENER', book);
    this.books.push(book);
  }

   onSelect(book: Book) {
    console.log('Selection made.', book);
    this.selectedBook = book === this.selectedBook ? null : book;
  }
}


