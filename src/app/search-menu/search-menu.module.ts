import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { LocationDisplayerModule } from './location-displayer/location-displayer.module';

@NgModule({
  declarations: [
    SearchMenuComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatInputModule,
    MatButtonModule,
    LocationDisplayerModule
  ],
  exports:[
    SearchMenuComponent
  ],
  providers: []
})
export class SearchMenuModule { }
