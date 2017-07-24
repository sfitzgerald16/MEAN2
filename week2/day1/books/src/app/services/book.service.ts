import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Book } from '../book';

@Injectable()
export class BookService {
  // public static base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';

  constructor(private _http: Http) {}

  getBooks(): Promise<Book[]> {
    console.log('books from server');
    return this._http.get('/books')
      .map(data => data.json())
      .toPromise();
  }

  getBook(id: string): Promise<Book> {
    return this._http.get(`/books/${ id }`)
      .map(data => data.json())
      .toPromise();
  }

  createBook(book: Book): Promise<Book> {
    return this._http.post('/books', book)
      .map(data => data.json())
      .toPromise();
  }

  removeBook(id: string): Promise<Book> {
    return this._http.delete(`/books/${ id }`)
      .map(data => data.json())
      .toPromise();
  }

  updateBook(book: Book): Promise<Book> {
    return this._http.put(`/books/${ book._id }`, book)
      .map(data => data.json())
      .toPromise();
  }
}
