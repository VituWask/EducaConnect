import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorSuporteComponent } from './professor-suporte.component';

describe('ProfessorSuporteComponent', () => {
  let component: ProfessorSuporteComponent;
  let fixture: ComponentFixture<ProfessorSuporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorSuporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorSuporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
