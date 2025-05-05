/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game-8Component } from './game-8.component';

describe('Game-8Component', () => {
  let component: Game-8Component;
  let fixture: ComponentFixture<Game-8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game-8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game-8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
