import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'app-personadd',
  templateUrl: './personadd.component.html',
  styleUrls: ['./personadd.component.scss'],
})
export class PersonaddComponent implements OnInit {
  person: Person;
  @Output() eventPerson: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() {
    this.person = {
      uid: 0,
      name: '',
      lastName: '',
      age: 0,
    };
  }

  ngOnInit(): void {}

  addPerson(): void {
    this.eventPerson.emit(this.person);
    this.person = {
      uid: 0,
      name: '',
      lastName: '',
      age: 0,
    };
  }
}
