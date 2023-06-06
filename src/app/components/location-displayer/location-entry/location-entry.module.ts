import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationEntryComponent } from './location-entry.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips'; 


@NgModule({
  declarations: [
    LocationEntryComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ],
  exports: [
    LocationEntryComponent
  ],
  providers: []
})
export class LocationEntryModule { }
