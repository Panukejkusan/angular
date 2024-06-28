import { CommonModule } from '@angular/common';
import { Component, Input, Output, ViewChild, input } from '@angular/core';
import { NgxSnakeComponent, NgxSnakeModule } from 'ngx-snake';
import { TimePipe } from '../time.pipe';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { HighscoresComponent } from "../highscores/highscores.component";

@Component({
    selector: 'app-game',
    standalone: true,
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss',
    imports: [CommonModule,
        NgxSnakeModule,
        TimePipe, HighscoresComponent]
})
export class GameComponent {
  @ViewChild(NgxSnakeComponent)
  private _snake: NgxSnakeComponent;

  // @Input() 
  // public changeShowGame:(show: boolean) => void;
  // @Input()
  // public playerName:string;

  public player: {userName: string, email: string} | null;
  constructor(private _route: ActivatedRoute, private _router: Router, private playerService: PlayerService) {
    
  }

  ngOnInit() {
    this.player = this.playerService.getPlayer();
  }

  public points = 0;
  public time: number = 0;
  interval: ReturnType<typeof setInterval>
  public status = 'ready';


  public foodEaten(event: any) {
    this.points++;
  }

  public gameOver(event: any) {
    this.status = 'dead';
    clearInterval(this.interval);
    alert(`Your score is ${this.points}. Try again.`);
    this.playerService.addScore(this.player!.userName, this.points);
    this.points = 0;1
    this.time = 0;
    this._snake.actionReset();
    this.status = 'ready';
  }

  public startTimer() {
    this.interval = setInterval(() => {
      this.time++
    }, 1000)
  }

  public startGame() {
    this.status = 'started';
    this.startTimer();
    this._snake.actionStart();
  }

  public stopGame() {
    this.status = 'paused';
    this._snake.actionStop();
    clearInterval(this.interval);
  }

  public exit() {
    this._router.navigate(['/intro']);
    this.playerService.clear();
    // this.changeShowGame(false)
    console.log();
  }

  public navigateToHighscores() {
    this._router.navigate(['/scores']);
  }

  

  // public onRotateButtonPressed() {
  //   // @ts-ignore
  //     this._snake.actionRotate();
  //     this._snake.gameOver.asObservable().subscribe((kar: any) => {
  //       console.log(kar)
  //     })
  //   }
}
