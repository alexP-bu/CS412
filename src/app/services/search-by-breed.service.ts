import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Dog } from "../config/dog";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchByBreedService {

  private nodeEndpoint = 'http://localhost:3000/api/';

  public getDogs(query: string): Observable<Dog[]> {
    return this.httpClient.get<Dog[]>(this.nodeEndpoint + '?' + `search=${query}`);
  }

  constructor(private httpClient: HttpClient) { }

}
