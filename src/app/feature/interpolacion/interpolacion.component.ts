import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.scss'],
})
export class InterpolacionComponent implements OnInit {
  title: string;

  person = {
    name: 'Hector',
    age: 18,
    avatar: 'https://source.unsplash.com/random',
  };

  constructor() {
    this.title = 'Soy una propieda del componente InterpolacionComponent';
  }

  ngOnInit(): void {}
}
