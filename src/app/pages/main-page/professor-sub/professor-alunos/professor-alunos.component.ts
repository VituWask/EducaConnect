import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-professor-alunos',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    NgIf,
    NgFor
  ],
  templateUrl: './professor-alunos.component.html',
  styleUrls: ['./professor-alunos.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ProfessorAlunosComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['nome', 'turma', 'nota', 'situacao'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: AlunoElement | null = null;
}

export interface AlunoElement {
  nome: string;
  turma: number;
  nota: string;
  situacao: string;
  description: string;
}

const ELEMENT_DATA: AlunoElement[] = [
  {
    nome: 'Ana Paula',
    turma: 101,
    nota: '8.5',
    situacao: 'Aprovado',
    description: 'A aluna teve um bom desempenho ao longo do semestre e participou ativamente das aulas.'
  },
  {
    nome: 'Carlos Silva',
    turma: 102,
    nota: '4.0',
    situacao: 'Reprovado',
    description: 'O aluno não alcançou a média mínima e teve muitas faltas.'
  },
  {
    nome: 'Beatriz Mendes',
    turma: 103,
    nota: '9.2',
    situacao: 'Aprovado',
    description: 'Excelente rendimento e engajamento com os projetos da turma.'
  },
  {
    nome: 'Diego Souza',
    turma: 101,
    nota: '5.5',
    situacao: 'Reprovado',
    description: 'Desempenho abaixo da média, precisa de reforço em matemática.'
  },
  {
    nome: 'Fernanda Lima',
    turma: 104,
    nota: '7.0',
    situacao: 'Aprovado',
    description: 'Participou de todas as atividades e entregou os trabalhos em dia.'
  },
  {
    nome: 'Gustavo Rocha',
    turma: 102,
    nota: '6.8',
    situacao: 'Aprovado',
    description: 'Aluno dedicado, melhorou seu desempenho no final do período.'
  },
  {
    nome: 'Isabela Torres',
    turma: 103,
    nota: '3.5',
    situacao: 'Reprovado',
    description: 'Teve dificuldade em acompanhar o conteúdo e não entregou trabalhos.'
  },
  {
    nome: 'Lucas Martins',
    turma: 104,
    nota: '7.8',
    situacao: 'Aprovado',
    description: 'Boa participação nas aulas e notas consistentes.'
  },
  {
    nome: 'Mariana Castro',
    turma: 101,
    nota: '9.0',
    situacao: 'Aprovado',
    description: 'Aluna destaque da turma, com excelente desempenho geral.'
  },
  {
    nome: 'Ricardo Alves',
    turma: 102,
    nota: '5.0',
    situacao: 'Reprovado',
    description: 'Apesar de comparecer às aulas, não atingiu os critérios de aprovação.'
  },
];
