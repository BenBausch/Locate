import { Component } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { IImage } from 'src/app/interfaces';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FileUploadComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: FileUploadComponent,
    },
  ],
})
export class FileUploadComponent implements ControlValueAccessor {
  image: IImage;
  uploadControl = new FormControl();

  constructor() {
    this.image = {
      name: '',
      url: 'assets/static/no-img.png',
      imageData: null,
    };
  }

  onChange = (image: IImage) => {};
  touched = false;
  onTouched = () => {};

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const uploadedFiles = target.files;
    if (uploadedFiles && uploadedFiles.length === 1) {
      const upFileMeta = uploadedFiles[0];
      const upFileData = uploadedFiles.item(0);
      this.image = {
        name: upFileMeta.name,
        url: URL.createObjectURL(upFileMeta),
        imageData: upFileData,
      };
      this.markAsTouched();
      this.onChange(this.image);
    }
  }

  writeValue(image: IImage): void {
    if (image) {
      this.image = image;
    }
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.image.imageData === null
      ? { errorMessage: 'No Image Selected!' }
      : null;
  }
}
