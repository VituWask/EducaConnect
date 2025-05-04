/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game-5Component } from './game-5.component';

describe('Game-5Component', () => {
  let component: Game-5Component;
  let fixture: ComponentFixture<Game-5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game-5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game-5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
