import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PersonComponent } from './components/person/person.component';
import { DirectivaComponent } from './directiva.component';
import { PersonsComponent } from './components/persons/persons.component';
import { PersonaddComponent } from './components/personadd/personadd.component';

@NgModule({
  declarations: [PersonComponent, DirectivaComponent, PersonsComponent, PersonaddComponent],
  exports: [DirectivaComponent],
  imports: [CommonModule, FormsModule],
})
export class DirectivaModule {}
