import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FunctionalModule } from './functional/functional.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FunctionalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
