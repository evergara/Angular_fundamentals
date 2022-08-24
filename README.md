# AngularFundamentals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## String interpolation 
- es la manera de enviar datos desde nuestro componente hacia la vista. Utilizando el doble símbolo de llaves {{ }}, o también conocidos como brackets, puedes imprimir el valor de una variable, realizar operaciones matemáticas o hacer el llamado a una función dentro del código HTML.
  ```
  <h1>{{ 'Hola Platzi' }}</h1>
  <h2>1 + 1 = {{ 1 + 1 }}</h2>
  <h3>{{ myFunction(); }}</h3>
  ```


## Propierty binding
- Es una forma de controlar dinamamicamente algunos atributos html para que estos sean renderizados apartir una string, variable o atributo de un objeto de la capa logica.

- Solo funcionan en una direccion desde la capa logica (conponent.ts) al objeto destino (atributo html), a esto se le conoce como flujo de datos.

- Debemos vincular los valores del componente a los atributos html, esto logramos encerrando el atributo html entre “square brakets”.

- Los corchetes [ ] (square brakets) hacen que Angular evalúe el lado derecho de la asignación como una expresión dinámica. Sin los corchetes, Angular trata el lado derecho como un literal de cadena y establece la propiedad en ese valor estático.

```
  <button disabled="false"></button> // dato fijo como string
  <button [disabled]="btnDisabled"></button> //dato dinamico
```

- A menudo, “interpolation” y “Property Binding” pueden lograr los mismos resultados. Los siguientes pares de enlaces hacen lo mismo.

```
  <p><img src="{{itemImageUrl}}"> is the <i>interpolated</i> image.</p>
  <p><img [src]="itemImageUrl"> is the <i>property bound</i> image.</p>
```

  
- Utilice cualquiera de las formas cuando represente valores de datos como cadenas.

- Es preferible el metodo de “interpolation” para facilitar la lectura.

- l establecer una propiedad de elemento en un valor de datos que no sea una cadena, debe usar “Property Binding”.

- Se recomienda comprender los “Event binding” para entender el flujo de datos de la aplicacion y como este interactua con “interpolation” y “Property Binding”.