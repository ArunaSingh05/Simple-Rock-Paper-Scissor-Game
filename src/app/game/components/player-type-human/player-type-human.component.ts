import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-player-type-human',
  templateUrl: './player-type-human.component.html',
  styleUrls: ['./player-type-human.component.scss']
})
export class PlayerTypeHumanComponent implements OnInit {
  throw;
  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

  setOption(option) {
    this.throw = option;
    this.gameService.messenger.next(option);
  }
}
