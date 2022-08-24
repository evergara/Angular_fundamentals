import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./Person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() name: string;

  constructor() {
    this.name = '';
  }

  ngOnInit(): void {}
}
