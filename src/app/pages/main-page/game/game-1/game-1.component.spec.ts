/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Game-1Component } from './game-1.component';

describe('Game-1Component', () => {
  let component: Game-1Component;
  let fixture: ComponentFixture<Game-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
