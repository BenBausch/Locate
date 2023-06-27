import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FileUploadComponent } from './file-upload.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule, LeafletModule, MatIconModule],
  exports: [FileUploadComponent],
  providers: [],
})
export class FileUploadModule {}
