import { Component, OnInit } from '@angular/core';
import { HelloService } from './service/hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  title: string;
  constructor(private helloService: HelloService) {
    this.title = '';
  }

  ngOnInit(): void {
    this.title = this.helloService.title;
  }
}
