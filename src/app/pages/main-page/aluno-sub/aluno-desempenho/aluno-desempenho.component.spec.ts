import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDesempenhoComponent } from './aluno-desempenho.component';

describe('AlunoDesempenhoComponent', () => {
  let component: AlunoDesempenhoComponent;
  let fixture: ComponentFixture<AlunoDesempenhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoDesempenhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoDesempenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
