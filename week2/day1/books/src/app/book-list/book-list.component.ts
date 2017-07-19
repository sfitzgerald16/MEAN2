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

  removeBook(book: Book) {
      if (book === this.selectedBook) {
        this.onSelect(book);
      }
      this.books.splice(this.books.indexOf(book), 1);
  }

  onTdClick(event: Event) {
    event.stopPropagation();
    console.log('TD CLICK');
  }

  updateSelectedBook(book: Book) {
    console.log('updating book in list component', book);

    this.books.splice(this.books.indexOf(this.selectedBook), 1, book);
  }

}


