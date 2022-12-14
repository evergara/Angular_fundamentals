import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { InterpolacionModule } from './feature/interpolacion/interpolacion.module';
import { PropertyBindingModule } from './feature/property-binding/property-binding.module';
import { EventBindingModule } from './feature/event-binding/event-binding.module';
import { NgmodelDataBindinModule } from './feature/ngmodel-data-bindin/ngmodel-data-bindin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    InterpolacionModule,
    PropertyBindingModule,
    EventBindingModule,
    NgmodelDataBindinModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
