import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { F1Component } from './Footer/f1/f1.component';
import { C003Component } from './Body/c003/c003.component';
import { C002Component } from './Body/c002/c002.component';
import { C001Component } from './Body/c001/c001.component';
import { H1Component } from './header/h1/h1.component';

@NgModule({
  declarations: [
    AppComponent,
    H1Component,
    F1Component,
    C001Component,
    C002Component,
    C003Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
