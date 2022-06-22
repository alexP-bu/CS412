import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Dog } from "../config/dog"


@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html',
  styleUrls: ['./form-results.component.css']
})
export class FormResultsComponent implements OnInit {

  @Input() dogsDisplayed: Dog[];

  constructor() {
    this.dogsDisplayed = [];
  }

  ngOnInit(): void {

  }

}
