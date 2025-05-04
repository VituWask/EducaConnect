import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common'; // ✅ importa aqui
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

export interface Atividade {
  atividade: string;
  ordem: number;
  materia: string;
  nota: number;
}

const ATIVIDADES_DATA: Atividade[] = [
  { ordem: 1, atividade: 'Prova 1', materia: 'Matemática', nota: 8.5 },
  { ordem: 2, atividade: 'Trabalho 1', materia: 'Português', nota: 5.0 },
  { ordem: 3, atividade: 'Prova 2', materia: 'História', nota: 6.7 },
  { ordem: 4, atividade: 'Redação', materia: 'Português', nota: 9.0 },
  { ordem: 5, atividade: 'Atividade em grupo', materia: 'Biologia', nota: 4.5 },
  { ordem: 6, atividade: 'Prova 3', materia: 'Matemática', nota: 7.8 },
  { ordem: 7, atividade: 'Trabalho 2', materia: 'Física', nota: 6.3 },
  { ordem: 8, atividade: 'Seminário', materia: 'Química', nota: 9.5 },
  { ordem: 9, atividade: 'Prova 4', materia: 'Geografia', nota: 5.2 },
  { ordem: 10, atividade: 'Atividade prática', materia: 'Física', nota: 8.1 },
  { ordem: 11, atividade: 'Trabalho 3', materia: 'Química', nota: 7.4 },
  { ordem: 12, atividade: 'Prova 5', materia: 'Biologia', nota: 6.0 },
  { ordem: 13, atividade: 'Atividade de pesquisa', materia: 'História', nota: 7.9 },
  { ordem: 14, atividade: 'Redação 2', materia: 'Português', nota: 8.8 },
  { ordem: 15, atividade: 'Prova final', materia: 'Matemática', nota: 9.3 },
];

@Component({
  selector: 'app-professor-atividade',
  standalone: true,
  imports: [MatTableModule, CommonModule], // ✅ adiciona CommonModule aqui
  templateUrl: './professor-atividade.component.html',
  styleUrls: ['./professor-atividade.component.scss'],
})
export class ProfessorAtividadeComponent {
  displayedColumns: string[] = ['ordem', 'atividade', 'materia', 'nota'];
  dataToDisplay = [...ATIVIDADES_DATA];

  dataSource = new AtividadeDataSource(this.dataToDisplay);

  addData() {
    const randomIndex = Math.floor(Math.random() * ATIVIDADES_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ATIVIDADES_DATA[randomIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class AtividadeDataSource extends DataSource<Atividade> {
  private _dataStream = new ReplaySubject<Atividade[]>();

  constructor(initialData: Atividade[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Atividade[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Atividade[]) {
    this._dataStream.next(data);
  }
}
