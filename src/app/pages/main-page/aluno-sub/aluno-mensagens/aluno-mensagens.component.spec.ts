import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoMensagensComponent } from './aluno-mensagens.component';

describe('AlunoMensagensComponent', () => {
  let component: AlunoMensagensComponent;
  let fixture: ComponentFixture<AlunoMensagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoMensagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoMensagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
