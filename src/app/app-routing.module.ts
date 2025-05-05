import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component'
import { AlunoAgendaComponent } from './pages/main-page/aluno-sub/aluno-agenda/aluno-agenda.component';
import { AlunoInicioComponent } from './pages/main-page/aluno-sub/aluno-inicio/aluno-inicio.component';
import { AlunoDesempenhoComponent } from './pages/main-page/aluno-sub/aluno-desempenho/aluno-desempenho.component';
import { AlunoRendimentoComponent } from './pages/main-page/aluno-sub/aluno-rendimento/aluno-rendimento.component';
import { AlunoMensagensComponent } from './pages/main-page/aluno-sub/aluno-mensagens/aluno-mensagens.component';
import { ProfessorInicioComponent } from './pages/main-page/professor-sub/professor-inicio/professor-inicio.component';
import { ProfessorAlunosComponent } from './pages/main-page/professor-sub/professor-alunos/professor-alunos.component';
import { ProfessorAtividadeComponent } from './pages/main-page/professor-sub/professor-atividade/professor-atividade.component';
import { ProfessorSuporteComponent } from './pages/main-page/professor-sub/professor-suporte/professor-suporte.component';
import { ProfessorPerfilComponent } from './pages/main-page/professor-sub/professor-perfil/professor-perfil.component';
import { GameMainComponent } from './pages/main-page/game/main/game-main/game-main.component';
import { Game1Component } from './pages/main-page/game/game-1/game-1.component';
import { Game2Component } from './pages/main-page/game/game-2/game-2.component';
import { Game3Component } from './pages/main-page/game/game-3/game-3.component';
import { Game4Component } from './pages/main-page/game/game-4/game-4.component';
import { Game5Component } from './pages/main-page/game/game-5/game-5.component';
import { Game6Component } from './pages/main-page/game/game-6/game-6.component';
import { Game7Component } from './pages/main-page/game/game-7/game-7.component';
import { Game8Component } from './pages/main-page/game/game-8/game-8.component';
import { Game9Component } from './pages/main-page/game/game-9/game-9.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainPageComponent, children: [
    {path : 'game-main', component: GameMainComponent},
    {path : 'game1', component: Game1Component},
    {path : 'game2', component: Game2Component},
    {path : 'game3', component: Game3Component},
    {path : 'game4', component: Game4Component},
    {path : 'game5', component: Game5Component},
    {path : 'game6', component: Game6Component},
    {path : 'game7', component: Game7Component},
    {path : 'game8', component: Game8Component},
    {path : 'game9', component: Game9Component},
    {path : 'inicio', component: AlunoInicioComponent},
    {path: 'agenda', component: AlunoAgendaComponent},
    {path: 'desempenho', component: AlunoDesempenhoComponent},
    {path: 'rendimento', component: AlunoRendimentoComponent},
    {path: 'mensagens', component: AlunoMensagensComponent},
    {path: 'professor', component: ProfessorInicioComponent, children:[
      {path: 'perfil', component: ProfessorPerfilComponent},
      {path: 'alunos', component: ProfessorAlunosComponent},
      {path: 'atividades', component: ProfessorAtividadeComponent},
      {path: 'suporte', component: ProfessorSuporteComponent},
    ]},
  ]},


  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
