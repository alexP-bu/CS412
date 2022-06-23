import { Component, OnInit } from '@angular/core';
import { Dog } from "../config/dog";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dogsReturned: Set<Dog>;

  constructor() {
    this.dogsReturned = new Set<Dog>();
  }

  ngOnInit(): void {

  }

  addDogs($event: Dog[]) {
    $event.forEach( dog => this.dogsReturned.add(dog))
  }
}
