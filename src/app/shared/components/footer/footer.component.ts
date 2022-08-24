import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <footer>@Derechos reservado</footer> `,
  styles: [
    `
      footer {
        text-align: center;
        color: black;
        widt: 100%;
        height: 10px;
        padding: 10px;
      }
    `,
  ],
})
export class FooterComponent {}
