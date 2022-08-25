import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgmodelDataBindingComponent } from './ngmodel-data-binding.component';
import { HelloComponent } from './components/hello/hello.component';

@NgModule({
  declarations: [NgmodelDataBindingComponent, HelloComponent],
  exports: [NgmodelDataBindingComponent],
  imports: [CommonModule, FormsModule],
})
export class NgmodelDataBindinModule {}
