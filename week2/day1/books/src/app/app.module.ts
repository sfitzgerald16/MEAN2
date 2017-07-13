import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { TitleizePipe } from './titleize.pipe';

// TitleizePipe.skipWords = ['of'];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    TitleizePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
