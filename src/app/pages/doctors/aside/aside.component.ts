import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbTypeahead } from "@ng-bootstrap/ng-bootstrap";
import { Observable, Subject, merge } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from "rxjs/operators";
import { Options, LabelType } from "ng5-slider";

const specialities = [
  "Allergy & Immunology",
  "Anesthesiology",
  "Cardiologist",
  "Cardiac Electrophysiologist",
  "Dermatology",
  "Diagnostic Radiology",
  "Endocrinologist",
  "Epidemiologist",
  "Emergency Medicine",
  "Family Medicine",
  "Gastroenterologist",
  "Geriatrician",
  "Hyperbaric Physician",
  "Hematologist",
  "Internal Medicine",
  "Medical Genetics",
  "Neurology",
  "Nuclear Medicine",
  "Obstetrics & Gynecology",
  "Ophthalmology",
  "Pathology",
  "Pediatrics",
  "Physical Medicine & Rehabilitation",
  "Preventive Medicine",
  "Psychiatry",
  "Radiation Oncology",
  "Surgery",
  "Urology",
];

const cities = [
  "Islamabad",
  "Lahore",
  "Karachi",
  "Rawalpindi",
  "Hyderabad",
  "Peshawar",
  "Quetta",
  "Faisalabad",
  "D.G Khan",
  "Swat",
  "Mardan",
  "Sukkur",
  "Bahawalpur",
  "Multan",
];

@Component({
  selector: "app-aside",
  templateUrl: "./aside.component.html",
  styleUrls: ["./aside.component.scss"],
})
export class AsideComponent implements OnInit {
  selectedSpeciality: any;
  selectedCity: any;
  
  @ViewChild("instance", { static: true }) instance: NgbTypeahead;
  focusCity$ = new Subject<string>();
  clickCity$ = new Subject<string>();
  focusSpecialization$ = new Subject<string>();
  clickSpecialization$ = new Subject<string>();

  minValue: number = 0;
  maxValue: number = 10000;
  options: Options = {
    floor: 0,
    ceil: 10000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "PKR: " + value;
        case LabelType.High:
          return "PKR: " + value;
        default:
          return "PKR: " + value;
      }
    },
  };

  constructor() {}

  ngOnInit(): void {}

  specializationSearch = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.clickSpecialization$.pipe(
      filter(() => !this.instance.isPopupOpen())
    );
    const inputFocus$ = this.focusSpecialization$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === ""
          ? specialities
          : specialities.filter(
              (v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        ).slice(0, 10)
      )
    );
  };

  citySearch = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.clickCity$.pipe(
      filter(() => !this.instance.isPopupOpen())
    );
    const inputFocus$ = this.focusCity$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === ""
          ? cities
          : cities.filter(
              (v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        ).slice(0, 10)
      )
    );
  };
}
