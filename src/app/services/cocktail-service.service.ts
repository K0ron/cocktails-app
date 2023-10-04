import { Cocktail } from './../models/cocktail.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  cocktails: Cocktail[] = [
    {
      name: 'Spritz',
      price: '12',
      image:
        'https://www.acouplecooks.com/wp-content/uploads/2020/05/St-Germain-Spritz-002.jpg',
    },
    {
      name: 'Blue Lagoon',
      price: '15',
      image:
        'https://www.papillesetpupilles.fr/wp-content/uploads/2022/07/Cocktail-Blue-Lagoon-Nischal-Kanishk-on-Unsplash.jpg',
    },
    {
      name: 'Ti punch',
      price: '10',
      image:
        'https://i.notrefamille.com/1800x0/smart/2020/09/24/34983-large.jpg',
    },
  ];

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
