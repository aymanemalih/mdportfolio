import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import {CountriesModule} from "./countries/countries.module";




@NgModule({
  declarations: [
    ManagementComponent,
  ],
  imports: [
    CommonModule,
    CountriesModule
  ]
})
export class ManagementModule { }
