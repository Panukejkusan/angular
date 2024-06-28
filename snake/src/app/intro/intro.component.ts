import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'  
})

export class IntroComponent {
 
   
  constructor(public fb: FormBuilder, private _router: Router,
    private playerService: PlayerService
  ) { }
  public userForm = this.fb.group({
    userName: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]]
  });
  // @Input() 
  // public setPlayerName:(playerName: string) => void;

  

  // openGame(playerName: string): void {
  //   this._router.navigate(['/game', playerName]);
  // }

  public onSubmit(form: { value: any }): void {
    // this.openGame(form.value.userName);
    this.playerService.savePlayer(form.value);
    this._router.navigate(['/game']);
  }



  public start(data: {name: string, email: string}) {
    // this.setPlayerName(data.name);
    // this.openGame(data.name);
    console.log(data);
  }
}
