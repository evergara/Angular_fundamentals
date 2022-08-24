import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  private _title: string = 'Esto es un servicio';

  get title(): string {
    return this._title;
  }
}
