import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  @Output() eventDeletePerson: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() {
    this.person = {} as Person;
  }

  ngOnInit(): void {}

  deletePerson(): void {
    this.eventDeletePerson.emit(this.person.uid);
  }
}
