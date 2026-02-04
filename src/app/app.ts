import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponente } from "./cabecalho-componente/cabecalho-componente";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
