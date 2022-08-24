import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolacionComponent } from './interpolacion.component';

@NgModule({
  declarations: [InterpolacionComponent],
  exports: [InterpolacionComponent],
  imports: [CommonModule],
})
export class InterpolacionModule {}
