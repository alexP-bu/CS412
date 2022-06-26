import { Component, OnInit } from '@angular/core';
import { Dog } from "../config/dog";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dogsReturned: Set<string>;
  dogsToDisplay: Dog[];

  constructor() {
    this.dogsReturned = new Set<string>();
    this.dogsToDisplay = [];
  }

  ngOnInit(): void {

  }

  addDogs($event: Dog[]) {
    $event.filter( dog => !this.dogsReturned.has(dog.name))
      .forEach( dog => {
        this.dogsReturned.add(dog.name);
        this.dogsToDisplay.push(dog);
        }
      )
  }
}
