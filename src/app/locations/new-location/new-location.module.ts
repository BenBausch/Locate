import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewLocationComponent } from './new-location.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MapModule } from 'src/app/components/map/map.module';

@NgModule({
  declarations: [
    NewLocationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MapModule
  ],
  exports:[
    NewLocationComponent
  ],
  providers: []
})
export class NewLocationModule { }
