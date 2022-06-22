import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-dog-search-form',
  templateUrl: './dog-search-form.component.html',
  styleUrls: ['./dog-search-form.component.css']
})
export class DogSearchFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  dogForm = this.formBuilder.group({
    breedSearchQuery: ['', [Validators.required, Validators.minLength(2)]]
  });

  ngOnInit(): void {
  }

  onSubmit(): void {

  }
}
