import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoRendimentoComponent } from './aluno-rendimento.component';

describe('AlunoRendimentoComponent', () => {
  let component: AlunoRendimentoComponent;
  let fixture: ComponentFixture<AlunoRendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoRendimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoRendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
