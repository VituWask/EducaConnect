import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AlunoInicioComponent } from './pages/main-page/aluno-sub/aluno-inicio/aluno-inicio.component';
import { AlunoAgendaComponent } from './pages/main-page/aluno-sub/aluno-agenda/aluno-agenda.component';
import { AlunoDesempenhoComponent } from './pages/main-page/aluno-sub/aluno-desempenho/aluno-desempenho.component';
import { AlunoRendimentoComponent } from './pages/main-page/aluno-sub/aluno-rendimento/aluno-rendimento.component';
import { AlunoMensagensComponent } from './pages/main-page/aluno-sub/aluno-mensagens/aluno-mensagens.component';


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { ProfessorInicioComponent } from './pages/main-page/professor-sub/professor-inicio/professor-inicio.component';
import { ProfessorAlunosComponent } from './pages/main-page/professor-sub/professor-alunos/professor-alunos.component';
import { ProfessorAtividadeComponent } from './pages/main-page/professor-sub/professor-atividade/professor-atividade.component';
import { ProfessorSuporteComponent } from './pages/main-page/professor-sub/professor-suporte/professor-suporte.component';
import { ProfessorPerfilComponent } from './pages/main-page/professor-sub/professor-perfil/professor-perfil.component';
import { GameMainComponent } from './pages/main-page/game/main/game-main/game-main.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainPageComponent,
    LoginComponent,
    AlunoInicioComponent,
    AlunoRendimentoComponent,
    ProfessorSuporteComponent,
    ProfessorPerfilComponent,
    GameMainComponent,


      ],


  imports: [
    ProfessorAtividadeComponent,
    ProfessorAlunosComponent,
    ProfessorInicioComponent,
    AlunoAgendaComponent,
    AlunoMensagensComponent,
    AlunoDesempenhoComponent,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
  ],




  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
