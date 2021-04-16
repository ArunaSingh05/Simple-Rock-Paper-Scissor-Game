import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameComponent } from './game.component';
import { PlayerTypeComputerComponent } from './components/player-type-computer/player-type-computer.component';
import { PlayerTypeHumanComponent } from './components/player-type-human/player-type-human.component';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    GameComponent,
    PlayerTypeComputerComponent,
    PlayerTypeHumanComponent
  ],
  exports: [GameComponent],
  imports: [
    CommonModule
  ],
  providers: [GameService]
})
export class GameModule { }
