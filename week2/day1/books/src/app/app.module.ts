import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { TitleizePipe } from './titleize.pipe';
import { SearchPipe } from './search.pipe';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorFormComponent } from './authors/author-form/author-form.component';



import { BookService } from './services/book.service';
import { AuthorService } from './services/author.service';

import { AppRoutingModule } from './app-routing.module';

// TitleizePipe.skipWords = ['of'];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    TitleizePipe,
    SearchPipe,
    BookFormComponent,
    BookDetailsComponent,
    NavComponent,
    NotFoundComponent,
    AuthorListComponent,
    AuthorFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    BookService,
    AuthorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
