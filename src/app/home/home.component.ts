import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  drinks: any;

  ngOnInit(): void {
    this.api.getMethod('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').subscribe((next: any) => {
      if (next) {
        this.drinks = next.drinks;
        console.log(next);
      }
    });
  }

}
