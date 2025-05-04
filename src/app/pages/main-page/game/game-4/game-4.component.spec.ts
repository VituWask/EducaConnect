/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game-4Component } from './game-4.component';

describe('Game-4Component', () => {
  let component: Game-4Component;
  let fixture: ComponentFixture<Game-4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game-4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game-4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
