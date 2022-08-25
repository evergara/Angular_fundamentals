import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClassBindingComponent } from './class-binding.component';
import { HelloComponent } from './components/hello/hello.component';

@NgModule({
  declarations: [ClassBindingComponent, HelloComponent],
  exports: [ClassBindingComponent],
  imports: [CommonModule, FormsModule],
})
export class ClassBindingModule {}
