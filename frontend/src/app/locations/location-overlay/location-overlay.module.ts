import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationOverlayComponent } from './location-overlay.component';
import { MapModule } from 'src/app/components/map/map.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LocationOverlayComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MapModule
  ],
  exports: [
    LocationOverlayComponent
  ],
  providers: []
})
export class LocationOverlayModule { }
