import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoInicioComponent } from './aluno-inicio.component';

describe('AlunoInicioComponent', () => {
  let component: AlunoInicioComponent;
  let fixture: ComponentFixture<AlunoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
