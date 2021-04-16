import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-player-type-computer',
  templateUrl: './player-type-computer.component.html',
  styleUrls: ['./player-type-computer.component.scss']
})
export class PlayerTypeComputerComponent implements OnInit {
  optionSelected: string;
  humanPlayerOptionSelected: number;
  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.messenger.subscribe((data) => {
      this.humanPlayerOptionSelected = data;
      this.optionSelected = this.getRandomOptionForComputer();
      this.gameService.compareThrow(this.optionSelected, this.humanPlayerOptionSelected);
    });
  }
  getRandomOptionForComputer(min = 1, max = 4) {
    const option = Math.floor(Math.random() * (max - min) + min);
    if (option === 1) {
      return 'rock';
    } else if (option === 2) {
      return 'paper';
    } else {
      return 'scissor';
    }
  }

}
