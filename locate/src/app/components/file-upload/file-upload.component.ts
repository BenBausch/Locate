import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IImage } from 'src/app/interfaces';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  image: IImage = {
    name: '',
    url: 'assets/static/no-img.png',
  };

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const uploadedFiles = target.files;
    if (uploadedFiles && uploadedFiles.length === 1) {
      const upFile = uploadedFiles[0];
      this.image = { name: upFile.name, url: URL.createObjectURL(upFile) };
    }
  }
}
