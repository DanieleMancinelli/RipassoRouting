import { Injectable } from '@angular/core';

// Il decoratore @Injectable permette ad Angular di "iniettare" questa classe
// nei componenti che ne hanno bisogno. Con providedIn: 'root',
// Angular crea un'unica istanza del servizio (singleton) valida in tutta l’app.
@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  // Array di studenti centralizzato: tutti i componenti possono leggerlo o modificarlo
  private studenti = [
    { id: 1, nome: 'Mario', classe: '5D', mediaVoti: 4.1 },
    { id: 2, nome: 'Luca', classe: '5D', mediaVoti: 7.3 },
    { id: 3, nome: 'Luigi', classe: '5D', mediaVoti: 3.9 },
    { id: 4, nome: 'Paolo', classe: '5D', mediaVoti: 7.0 },
    { id: 5, nome: 'Andrea', classe: '5D', mediaVoti: 5.7 },
  ];

  // Metodo che restituisce tutti gli studenti.
  // Serve per leggere i dati nei componenti come Pagina3.
  getStudenti() {
    return this.studenti;
  }

  // Metodo per aggiungere uno studente.
  // Viene usato in Pagina2 per salvare i nuovi studenti.
  aggiungiStudente(nome: string, classe: string, mediaVoti: number) {
    const nuovo = {
      id: this.studenti.length + 1, // ID generato automaticamente
      nome,
      classe,
      mediaVoti
    };
    this.studenti.push(nuovo);
  }

  // Metodo per rimuovere uno studente tramite il suo ID.
  // Viene usato in Pagina3.
  rimuoviStudente(id: number) {
    this.studenti = this.studenti.filter(s => s.id !== id);
  }
}
