import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationEntryComponent } from './location-entry.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule} from '@angular/material/chips';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LocationEntryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    RouterModule
  ],
  exports: [
    LocationEntryComponent
  ],
  providers: []
})
export class LocationEntryModule { }
