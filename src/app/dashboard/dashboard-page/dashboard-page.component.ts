import { GamesService } from './../../_core/services/games.service';
import { GameDataService } from './../../_core/services/game-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  gameList = [
    
  ];

  constructor(private router: Router, private gameDataService: GameDataService, private gamesService: GamesService) {

  }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe({
      next: (response) => {
        this.gameList = response;
      }
    })
  }

  navigateToGamePage(gameData: any) {
    this.gameDataService.selectedCard = gameData;
    this.router.navigate(['/game-page'],{queryParams:{gameId:gameData.id}});
  }
}
