import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';
import { NgModule } from '@angular/core';
import { HighscoresComponent } from './highscores/highscores.component';

export const routes: Routes = [
    { path: '', redirectTo: '/intro', pathMatch: 'full' },
    { path: 'game', component: GameComponent },
    { path: 'intro', component: IntroComponent },
    { path: 'scores', component: HighscoresComponent}
  ];
  
//   @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })

// export class AppRoutes {}

