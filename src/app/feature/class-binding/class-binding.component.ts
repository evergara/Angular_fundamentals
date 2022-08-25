import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss'],
})
export class ClassBindingComponent implements OnInit {
  countClickInName: number;
  name: string;

  constructor() {
    this.countClickInName = 0;
    this.name = 'El Aprendiz';
  }

  ngOnInit(): void {}

  clickName(): void {
    this.countClickInName++;
  }
}
