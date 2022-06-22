import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DogSearchFormComponent } from './dog-search-form/dog-search-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormResultsComponent } from './form-results/form-results.component';

@NgModule({
  declarations: [
    AppComponent,
    DogSearchFormComponent,
    FormResultsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
