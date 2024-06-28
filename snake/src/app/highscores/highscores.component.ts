import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-highscores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highscores.component.html',
  styleUrl: './highscores.component.scss'
})


export class HighscoresComponent {
  public highscores: Array<{userName: string, score: number}>;

  public sort="asc";

  constructor(private playerService: PlayerService) {

   }

   ngOnInit() {
    this.highscores = this.playerService.getScores(this.sort);
    console.log(this.highscores);
  }

  changeSort(value: string): void {
    this.sort = value;
    this.highscores = this.playerService.getScores(this.sort);
  }
}
