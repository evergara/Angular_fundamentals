import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent implements OnInit {
  parentNama: string;
  countClick: number;
  countProgress: number;
  btnDisabled: boolean;
  name: string;

  constructor() {
    this.parentNama = 'Pedro';
    this.countClick = 0;
    this.btnDisabled = false;
    this.name = '';
    this.countProgress = 10;
  }

  ngOnInit(): void {}

  onNameHello(event: string): void {
    this.countClick++;
  }

  toggleButtom(): void {
    this.btnDisabled = !this.btnDisabled;
  }

  saveName(event: Event): void {
    let value = event.target as HTMLInputElement;
    this.name = value.value;
    this.parentNama = this.name;
    this.name = '';
  }

  incrementarProgress(): void {
    this.countProgress++;
  }

  decrementarProgress(): void {
    this.countProgress--;
  }
}
