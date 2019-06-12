import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { A1Component } from './a/a1/a1.component';
import { A2Component } from './a/a2/a2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AComponent, BComponent, A1Component, A2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
