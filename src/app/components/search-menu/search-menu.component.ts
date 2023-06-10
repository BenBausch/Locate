import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent{
  searchForm = new FormGroup({
    sportCategorie: new FormControl('Basketball'),
    country: new FormControl('LU'),
    postalCode: new FormControl('')
  });

  submit(): void {
    console.log(this.searchForm.value)
  }
  
}
