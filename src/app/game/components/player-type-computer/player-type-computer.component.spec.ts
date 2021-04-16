import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTypeComputerComponent } from './player-type-computer.component';

describe('PlayerTypeComputerComponent', () => {
  let component: PlayerTypeComputerComponent;
  let fixture: ComponentFixture<PlayerTypeComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTypeComputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTypeComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
