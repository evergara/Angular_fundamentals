import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  @Output() clickInName: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.name = '';
  }

  ngOnInit(): void {}

  onEmitClickname(): void {
    this.clickInName.emit('hello');
  }
}
