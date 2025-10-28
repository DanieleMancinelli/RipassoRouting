import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentiService } from '../services/studenti-service';

// Questo componente serve per inserire nuovi studenti.
// Usa FormsModule per il two-way binding (collegamento tra input e variabili).
@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagina2.html'
})
export class Pagina2 {
  // Variabili legate ai campi input
  nome = '';
  classe = '';
  mediaVoti: number | null = null;

  // Inject del servizio StudentiService
  constructor(private studentiService: StudentiService) {}

  // Metodo richiamato al submit del form
  aggiungi() {
    // Controlla che tutti i campi siano compilati
    if (this.nome && this.classe && this.mediaVoti !== null) {
      // Usa il metodo del servizio per aggiungere lo studente
      this.studentiService.aggiungiStudente(this.nome, this.classe, this.mediaVoti);
      alert('Studente aggiunto con successo!');
      // Pulisce i campi del form
      this.nome = '';
      this.classe = '';
      this.mediaVoti = null;
    } else {
      alert('Compila tutti i campi!');
    }
  }
}
