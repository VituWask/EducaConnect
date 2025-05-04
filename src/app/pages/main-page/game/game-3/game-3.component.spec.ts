/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game-3Component } from './game-3.component';

describe('Game-3Component', () => {
  let component: Game-3Component;
  let fixture: ComponentFixture<Game-3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game-3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game-3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
