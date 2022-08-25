import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  @Output() eventEmittClickInName: EventEmitter<void> =
    new EventEmitter<void>();

  inputName: string;
  names: Array<string>;

  constructor() {
    this.name = '';
    this.inputName = '';
    this.names = [];
  }

  ngOnInit(): void {}

  addName(): void {
    this.names.push(this.inputName);
    console.log(this.names);
    this.inputName = '';
  }

  handlerClickInName() {
    this.eventEmittClickInName.emit();
  }
}
