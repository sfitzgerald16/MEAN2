import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailsComponent } from './book-details/book-details.component';


// books/59767ef7274662debe386fea
const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'books/new',
    component: BookFormComponent,
  },
  {
    path: 'books/:_id',
    component: BookDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
