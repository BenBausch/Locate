import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss']
})
export class NewLocationComponent {
  // newLocationForm = new FormGroup({
  //   name: new FormControl(),
  //   sport: new FormControl(),
  //   imageUrl: new FormControl(),
  //   tags: new FormControl(),
  //   coordinates: new FormControl(),
  //   housenumber: new FormControl() ,
  //   postcode: new FormControl(),
  //   street: new FormControl(),
  //   countryCode: new FormControl()
  // });

  public lat?: number;
  public lng?: number;

  public ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
