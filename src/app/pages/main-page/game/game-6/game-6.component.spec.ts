/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game-6Component } from './game-6.component';

describe('Game-6Component', () => {
  let component: Game-6Component;
  let fixture: ComponentFixture<Game-6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game-6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game-6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
