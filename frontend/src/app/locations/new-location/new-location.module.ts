import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewLocationComponent } from './new-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapModule } from 'src/app/components/map/map.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FileUploadComponent } from 'src/app/components/file-upload/file-upload.component';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';

@NgModule({
  declarations: [NewLocationComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MapModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    FileUploadModule,
  ],
  exports: [NewLocationComponent],
  providers: [],
})
export class NewLocationModule {}
