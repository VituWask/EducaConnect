import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAtividadeComponent } from './professor-atividade.component';

describe('ProfessorAtividadeComponent', () => {
  let component: ProfessorAtividadeComponent;
  let fixture: ComponentFixture<ProfessorAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorAtividadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
