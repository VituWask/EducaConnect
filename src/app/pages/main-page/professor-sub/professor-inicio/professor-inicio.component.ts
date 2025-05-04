import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {Observable, Observer} from 'rxjs';



interface ExampleTab {
  label: string;
  route: string;
}

@Component({
  selector: 'app-professor-inicio',
  standalone: true,
imports: [
  RouterModule,
  MatTabsModule,
  CommonModule,
],



  templateUrl: './professor-inicio.component.html',
  styleUrls: ['./professor-inicio.component.scss']
})
export class ProfessorInicioComponent {

  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'ALUNOS', route: 'alunos' },
          { label: 'ATIVIDADES', route: 'atividades' },
          { label: 'SUPORTE', route: 'suporte' }
        ]);
      }, 1000);
    });
  }
}
