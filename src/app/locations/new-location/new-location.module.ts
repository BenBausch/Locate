import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewLocationComponent } from './new-location.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewLocationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    NewLocationComponent
  ],
  providers: []
})
export class NavigationModule { }
