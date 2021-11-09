import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-fases',
  templateUrl: './fases.component.html',
  styleUrls: ['./fases.component.css'],
})
export class FasesComponent {
  button: any;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.button = this.elementRef.nativeElement.querySelector('.button');
  }

  fases: string[] = [
    'Saiyajin',
    'Super Saiyajin',
    'Super Sayaijin Dios',
    'Super Saiyajin Azul',
    'Ultra Instinct',
  ];
  faseActual: string = '';

  cambiarFase() {
    let color: string = '';
    this.faseActual = this.fases.shift() || 'No hay más fases';

    switch (this.faseActual) {
      case 'Saiyajin':
        color = 'black';
        break;
      case 'Super Saiyajin':
        color = 'yellow';
        break;
      case 'Super Sayaijin Dios':
        color = 'red';
        break;
      case 'Super Saiyajin Azul':
        color = 'aqua';
        break;
      case 'Ultra Instinct':
        color = 'white';
        break;
    }
    this.button.style.backgroundColor = color;
    this.button.style.color = 'invert(100%)';
  }
}
