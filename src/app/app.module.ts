import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { H1Component } from './header/h1/h1.component';
import { F1Component } from './Footer/f1/f1.component';
import { B1Component } from './Body/b1/b1.component';
import { B2Component } from './Body/b2/b2.component';
import { C001Component } from './Body/c001/c001.component';
import { C002Component } from './Body/c002/c002.component';
import { C003Component } from './Body/c003/c003.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    H1Component,
    H12222Component,
    H9Component,
    F1Component,
    B1Component,
    B2Component,
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
