import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTypeHumanComponent } from './player-type-human.component';

describe('PlayerTypeHumanComponent', () => {
  let component: PlayerTypeHumanComponent;
  let fixture: ComponentFixture<PlayerTypeHumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTypeHumanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTypeHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
