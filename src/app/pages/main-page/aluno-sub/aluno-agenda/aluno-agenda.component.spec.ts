import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoAgendaComponent } from './aluno-agenda.component';

describe('AlunoAgendaComponent', () => {
  let component: AlunoAgendaComponent;
  let fixture: ComponentFixture<AlunoAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
