import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchMenuComponent } from './search-menu.component';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    SearchMenuComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatInputModule,
    MatButtonModule
  ],
  exports:[
    SearchMenuComponent
  ],
  providers: []
})
export class SearchMenuModule { }
