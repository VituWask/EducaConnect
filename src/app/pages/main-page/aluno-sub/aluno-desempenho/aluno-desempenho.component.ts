import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  ATIVIDADE: string;
  position: number;
  weight: number;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, ATIVIDADE: 'Acesso ao conteúdo', weight: 5, symbol: 100},
  {position: 2, ATIVIDADE: 'Participação em fóruns', weight: 10, symbol: 80},
  {position: 3, ATIVIDADE: 'Questionário 1', weight: 10, symbol: 75},
  {position: 4, ATIVIDADE: 'Projeto prático (Módulo 1)', weight: 10, symbol: 90},
  {position: 5, ATIVIDADE: 'Quiz interativo', weight: 5, symbol: 100},
  {position: 6, ATIVIDADE: 'Questionário 2', weight: 10, symbol: 70},
  {position: 7, ATIVIDADE: 'Projeto prático (Módulo 2)', weight: 15, symbol: 85},
  {position: 8, ATIVIDADE: 'Redação avaliativa', weight: 10, symbol: 88},
  {position: 9, ATIVIDADE: 'Simulado final', weight: 15, symbol: 92},
  {position: 10, ATIVIDADE: 'Avaliação final', weight: 10, symbol: 87},
];


@Component({
  selector: 'app-aluno-desempenho',
  standalone: true,

  imports: [
    MatTableModule
    ],

  templateUrl: './aluno-desempenho.component.html',
  styleUrls: ['./aluno-desempenho.component.scss']
})
export class AlunoDesempenhoComponent {
  displayedColumns: string[] = ['position', 'ATIVIDADE', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
