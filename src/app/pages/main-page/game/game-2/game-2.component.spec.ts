/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game-2Component } from './game-2.component';

describe('Game-2Component', () => {
  let component: Game-2Component;
  let fixture: ComponentFixture<Game-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
