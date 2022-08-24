import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `<p>Hello world</p>`,
  styles: [
    `
      p {
        font-size: 1.6em;
        color: blue;
      }
    `,
  ],
})
export class InlineComponent {
  
}
