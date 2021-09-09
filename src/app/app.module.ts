import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C003Component } from './Body/c003/c003.component';
import { C002Component } from './Body/c002/c002.component';
import { C001Component } from './Body/c001/c001.component';

@NgModule({
  declarations: [
    AppComponent,
    C003Component,
    C002Component,
    C001Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
