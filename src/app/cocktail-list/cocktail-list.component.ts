import { CocktailService } from './../services/cocktail-service.service';
import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails!: Cocktail[];

  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
