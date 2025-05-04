import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar ngIf, etc.

@Component({
  selector: 'app-aluno-agenda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno-agenda.component.html',
  styleUrls: ['./aluno-agenda.component.scss']
})
export class AlunoAgendaComponent {
  months: string[] = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  currentMonthIndex: number = 4; // Começa em Dezembro

  get currentMonthImage(): string {
    return `assets/images/agenda/${this.months[this.currentMonthIndex]}.svg`;
  }

  nextMonth(): void {
    this.currentMonthIndex = (this.currentMonthIndex + 1) % this.months.length;
  }

  prevMonth(): void {
    this.currentMonthIndex = (this.currentMonthIndex - 1 + this.months.length) % this.months.length;
  }
}
