import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationDisplayerComponent } from './location-displayer.component';
import { LocationEntryModule } from './location-entry/location-entry.module';

@NgModule({
  declarations: [
    LocationDisplayerComponent
  ],
  imports: [
    BrowserModule,
    LocationEntryModule
  ],
  exports: [
    LocationDisplayerComponent
  ],
  providers: []
})
export class LocationDisplayerModule { }
