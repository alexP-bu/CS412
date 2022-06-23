import { Component, OnInit } from '@angular/core';
import { Dog } from "../config/dog";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dogsReturned: Dog[];

  constructor() {
    this.dogsReturned = [];
  }

  ngOnInit(): void {

  }

}
