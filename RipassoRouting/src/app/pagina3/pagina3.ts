import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudenteComponent } from '../studente/studente';
import { StudentiService } from '../services/studenti-service';

// Questo componente mostra l'elenco degli studenti
// e permette di eliminarne uno tramite il servizio.
@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [CommonModule, StudenteComponent],
  templateUrl: './pagina3.html'
})
export class Pagina3 implements OnInit {
  studenti: any[] = [];

  // Iniettiamo il servizio nel costruttore
  constructor(private studentiService: StudentiService) {}

  // ngOnInit viene chiamato appena Angular carica il componente
  ngOnInit() {
    this.aggiornaLista();
  }

  // Carica i dati dal servizio
  aggiornaLista() {
    this.studenti = this.studentiService.getStudenti();
  }

  // Rimuove uno studente e aggiorna la lista
  rimuovi(id: number) {
    this.studentiService.rimuoviStudente(id);
    this.aggiornaLista();
  }
}
