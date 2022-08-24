import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss'],
})
export class SaludarComponent implements OnInit {
  @Input() name: string;

  constructor() {
    this.name = '';
  }

  ngOnInit(): void {}
}
