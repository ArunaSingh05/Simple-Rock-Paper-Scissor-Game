import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GameService {
  humanScore = 0;
  computerScore = 0;
  winner: string;
  messenger: BehaviorSubject<any> = new BehaviorSubject(null);;
  constructor() { }

  compareThrow(currentComputerThrow, currentHumanThrow) {
    console.log('human', currentHumanThrow);
    console.log('computer', currentComputerThrow);
    if (currentHumanThrow === 'rock' && currentComputerThrow === 'paper') {
      this.computerScore += 1;
      this.winner = `Player 2 Win`;
    } else if (currentHumanThrow === 'paper' && currentComputerThrow === 'scissor') {
      this.computerScore += 1;
      this.winner = `Player 2 Win`;
    } else if (currentHumanThrow === 'scissor' && currentComputerThrow === 'rock') {
      this.computerScore += 1;
      this.winner = `Player 2 Win`;
    }
    else if (currentHumanThrow === 'paper' && currentComputerThrow === 'rock') {
      this.humanScore += 1;
      this.winner = `You Win`;
    } else if (currentHumanThrow === 'scissor' && currentComputerThrow === 'rock') {
      this.humanScore += 1;
      this.winner = `You Win`;
    } else if (currentHumanThrow === 'scissor' && currentComputerThrow === 'paper') {
      this.humanScore += 1;
      this.winner = `You Win`;
    }
    else if (
      (currentHumanThrow === 'paper' && currentComputerThrow === 'paper')
      || (currentHumanThrow === 'scissor' && currentComputerThrow === 'scissor')
      || (currentHumanThrow === 'rock' && currentComputerThrow === 'rock')) {
      this.winner = `TIE`;
    }
  }
}
