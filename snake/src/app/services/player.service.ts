import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // KEY = 'playerKey';
  private player: {userName: string, email: string} | null = null;

  private highscores: Array<{userName: string, score: number}> = [];


  constructor() { }

  getScores(sort: string): Array<{userName: string, score: number}> {
    if(sort==="asc"){
      this.highscores.sort((a,b) => a.score - b.score);
    } else {
      this.highscores.sort((a,b) => b.score - a.score);
    }
    
    // this.addScore("kaczka", 1239)
    return this.highscores.slice(0, 10);
  }

  addScore(userName: string, score: number): void {
    this.highscores.push({userName, score})
  }
  
  savePlayer(value: {userName: string, email: string}): void {
    this.player = value;
  }

  getPlayer(): {userName: string, email: string} | null {
    return this.player 
  } 

  clear(): void {
    this.player = null;
  }
}
