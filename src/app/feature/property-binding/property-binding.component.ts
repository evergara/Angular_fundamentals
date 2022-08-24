import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss'],
})
export class PropertyBindingComponent implements OnInit {
  isActive: boolean;
  progress: number;
  telephone: number;
  nameGreet: string;

  constructor() {
    this.isActive = true;
    this.progress = 55;
    this.telephone = 123325626;
    this.nameGreet = 'Rodolfo';
  }

  ngOnInit(): void {}
}
