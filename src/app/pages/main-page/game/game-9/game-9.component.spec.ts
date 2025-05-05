/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game-9Component } from './game-9.component';

describe('Game-9Component', () => {
  let component: Game-9Component;
  let fixture: ComponentFixture<Game-9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game-9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game-9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
