import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Componente figlio usato per mostrare i dati di un singolo studente.
// Ha un Input() per ricevere i dati dal padre.
@Component({
  selector: 'app-studente',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './studente.html'
})
export class StudenteComponent {
  // Dato ricevuto dal componente padre
  @Input() studente: any;

  // Variabile booleana per mostrare/nascondere la media voti
  mostraMedia = false;

  // Metodo per cambiare lo stato del bottone
  toggleMedia() {
    this.mostraMedia = !this.mostraMedia;
  }
}
