import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Book } from '../book';

@Injectable()
export class BookService {
  public static base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';

  constructor(private _http: Http) {}

  getBooks(): Promise<Book[]> {
    return this._http.get(BookService.base)
      .map(data => data.json())
      .toPromise();
  }

  getBook(id: string): Promise<Book> {
    return this._http.get(`${ BookService.base }/${ id }`)
      .map(data => data.json())
      .toPromise();
  }

  createBook(book: Book): Promise<Book> {
    return this._http.post(BookService.base, book)
      .map(data => data.json())
      .toPromise();
  }

  removeBook(id: number): Promise<Book> {
    return this._http.delete(`${ BookService.base }/${ id }`)
      .map(data => data.json())
      .toPromise();
  }

  updateBook(book: Book): Promise<Book> {
    return this._http.put(`${ BookService.base }/${ book.id }`, book)
      .map(data => data.json())
      .toPromise();
  }
}
