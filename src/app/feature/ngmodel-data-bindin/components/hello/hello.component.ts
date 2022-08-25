import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  @Output() emitClickName: EventEmitter<void> = new EventEmitter<void>();

  names: Array<string>;
  inputName: string;

  constructor() {
    this.inputName = '';
    this.names = [];
    this.name = '';
  }

  ngOnInit(): void {}

  AddName(): void {
    this.names.push(this.inputName);
    this.inputName = '';
  }

  clickName(): void {
    this.emitClickName.emit();
  }
}
