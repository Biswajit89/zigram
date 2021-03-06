import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() form: any;
  categories: any;
  ingredients: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getCategoryList();
    this.getIngrdientsList();
  }
  getCategoryList() {
    this.api.getMethod('list.php?c=list').subscribe((next: any) => {
      this.categories = next.drinks;
    });
  }
  getIngrdientsList() {
    this.api.getMethod('list.php?i=list').subscribe((next: any) => {
      this.ingredients = next.drinks;
    });
  }
  

}
