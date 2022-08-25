import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PersonComponent } from './components/person/person.component';
import { DirectivaComponent } from './directiva.component';

@NgModule({
  declarations: [PersonComponent, DirectivaComponent],
  exports: [DirectivaComponent],
  imports: [CommonModule, FormsModule],
})
export class DirectivaModule {}
