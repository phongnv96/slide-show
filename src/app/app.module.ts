import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookItemComponent } from 'src/home/book-item/book-item.component';
import { BookListComponent } from 'src/home/book-list/book-list.component';
import { HomeComponent } from 'src/home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      BookItemComponent,
      BookListComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
