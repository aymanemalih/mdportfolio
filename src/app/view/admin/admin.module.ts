import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SkillManagerComponent } from './skill-manager/skill-manager.component';

const routes:Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'skillManger',
      component: SkillManagerComponent
    },
    {
      path: 'app-manager',
      loadChildren: () => import("./management/management.module").then(m => m.ManagementModule)
    }
  ]}
]

@NgModule({
  declarations: [
    AdminComponent,
    NavBarComponent,
    TopBarComponent,
    SkillManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
