import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studente.html'
})
export class StudenteComponent {
  @Input() studente: any;

  mostraMedia: boolean = false; // 🔹 per tenere traccia della visibilità

  toggleMedia() {
    this.mostraMedia = !this.mostraMedia;
  }
}