import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { InterpolacionModule } from './feature/interpolacion/interpolacion.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, InterpolacionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
