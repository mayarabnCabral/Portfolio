import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecalho-componente.html',
  styleUrl: './cabecalho-componente.css',
})
export class CabecalhoComponente {
  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}