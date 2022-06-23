import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import {SearchByBreedService} from "../services/search-by-breed.service";
import { Dog } from "../config/dog";
import {Weight} from "../config/weight";
import {of} from "rxjs";

@Component({
  selector: 'app-dog-search-form',
  templateUrl: './dog-search-form.component.html',
  styleUrls: ['./dog-search-form.component.css']
})
export class DogSearchFormComponent implements OnInit {

  @Output() newDogEvent = new EventEmitter<Dog[]>();

  constructor(private formBuilder: FormBuilder, private searchService: SearchByBreedService) { }

  dogForm = this.formBuilder.group({
    breedSearchQuery: ['', [Validators.required, Validators.minLength(2)]]
  });

  searchDogs(query: string): void {
    this.searchService.getDogs(query).subscribe({
        next: res => this.newDogEvent.emit(res),
        //error: err => console.log(err.status, err.statusText) //use this when using with server
        error: err => console.log('Error getting data from API: ' + err) //for debugging
      }
    );
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.searchDogs(this.dogForm.value.breedSearchQuery ?? 'German Shepherd'); //if somehow null gets through, just search german shepherd
  }

}
