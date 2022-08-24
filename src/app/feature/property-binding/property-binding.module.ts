import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyBindingComponent } from './property-binding.component';
import { SaludarComponent } from './components/saludar/saludar.component';

@NgModule({
  declarations: [PropertyBindingComponent, SaludarComponent],
  exports: [PropertyBindingComponent],
  imports: [CommonModule],
})
export class PropertyBindingModule {}
