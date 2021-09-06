import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MylibraryModule } from 'mylibrary';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MylibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
