/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game-7Component } from './game-7.component';

describe('Game-7Component', () => {
  let component: Game-7Component;
  let fixture: ComponentFixture<Game-7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game-7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game-7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
