import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  persons: Person[];

  constructor() {
    this.persons = [
      {
        uid: 1,
        name: 'Raul',
        lastName: 'perez',
        age: 18,
      },
      {
        uid: 2,
        name: 'Margo',
        lastName: 'perez',
        age: 15,
      },
    ];
  }

  ngOnInit(): void {}

  deletePerson(index: number): void {
    console.log(index);
    this.persons.splice(index, 1);
  }

  savePerson(person: Person): void {
    let uid = 10;
    person.uid = uid;
    this.persons.push(person);
  }
}
