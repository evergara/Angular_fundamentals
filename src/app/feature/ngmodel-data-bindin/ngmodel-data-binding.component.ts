import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel-data-binding',
  templateUrl: './ngmodel-data-binding.component.html',
  styleUrls: ['./ngmodel-data-binding.component.scss'],
})
export class NgmodelDataBindingComponent implements OnInit {
  name: string;
  countClickName: number;
  age: number = 10;

  constructor() {
    this.name = 'Emerson';
    this.countClickName = 0;
  }

  ngOnInit(): void {}

  clickName(): void {
    this.countClickName++;
  }
}
