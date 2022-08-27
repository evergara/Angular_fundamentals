import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss'],
})
export class DirectivaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  
  UpdateNameClass(count: number) {
    return {
      error: count <= 2,
      warning: count > 2 && count <= 4,
      success: count === 5,
      bold: count === 5,
    };
  }
}
