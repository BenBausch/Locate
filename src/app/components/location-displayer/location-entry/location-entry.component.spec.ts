import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEntryComponent } from './location-entry.component';

describe('LocationEntryComponent', () => {
  let component: LocationEntryComponent;
  let fixture: ComponentFixture<LocationEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationEntryComponent]
    });
    fixture = TestBed.createComponent(LocationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
