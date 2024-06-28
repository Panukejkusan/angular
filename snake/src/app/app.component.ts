
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { ReactiveFormsModule } from '@angular/forms';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    IntroComponent,
    GameComponent,
    RouterOutlet,
    ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'snake';
  showGame = false;
  playerName = '';

  constructor(private _router: Router) { }
  
  // setPlayerName = (playerName: string) => {
  //   this.playerName = playerName;
  // }

  changeShowGame = (show: boolean) => {
    this.showGame = show;
  }
}
