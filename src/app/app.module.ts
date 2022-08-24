import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { InterpolacionModule } from './feature/interpolacion/interpolacion.module';
import { PropertyBindingModule } from './feature/property-binding/property-binding.module';
import { EventBindingModule } from './feature/event-binding/event-binding.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, InterpolacionModule, PropertyBindingModule, EventBindingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
