import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import {debounceTime} from 'rxjs/operators';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  drinks: any;
  form: FormGroup;
  constructor(private api: ApiService, private fb: FormBuilder) {
    this.form = this.createFilterForm();
  }
  ngOnInit(): void {
   
    this.form.valueChanges.pipe(debounceTime(500)).subscribe(next => {
      if(next.name) {
        this.search('s', next.name);
      }
      if(next.ingredients) {
        this.search('i', next.ingredients);
      }
      if(next.category) {
        this.search('c', next.category);
      }
      
    })
  }
  search(endpoint: string, param: string): any {
    this.api.getMethod('search.php?'+endpoint+'=' + param).subscribe((next: any) => {
      if (next) {
        this.drinks = next.drinks;
        console.log(next);
      }
    });
  }
  createFilterForm(): FormGroup {
    return this.fb.group({
      name: [''],
      category: [''],
      ingredients: ['']
    })
  }

}
