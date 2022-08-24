import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InlineComponent } from './inline.component';
import { HelloComponent } from './hello/hello.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [AppComponent, InlineComponent, HelloComponent, PersonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
