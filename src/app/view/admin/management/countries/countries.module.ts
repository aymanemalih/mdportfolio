import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { CountriesComponent } from './countries.component';

const routes:Routes = [{
  path: 'countries',
  component: CountriesComponent}
]

@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CountriesModule { }
