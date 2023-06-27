import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationDisplayerComponent } from './location-displayer.component';
import { LocationEntryModule } from '../../locations/location-entry/location-entry.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LocationDisplayerComponent
  ],
  imports: [
    CommonModule,
    LocationEntryModule,
    RouterModule
  ],
  exports: [
    LocationDisplayerComponent
  ],
  providers: []
})
export class LocationDisplayerModule { }
