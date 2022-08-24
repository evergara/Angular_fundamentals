import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBindingComponent } from './event-binding.component';
import { HelloComponent } from './components/hello/hello.component';



@NgModule({
  declarations: [
    EventBindingComponent,
    HelloComponent
  ],
  exports:[EventBindingComponent],
  imports: [
    CommonModule
  ]
})
export class EventBindingModule { }
