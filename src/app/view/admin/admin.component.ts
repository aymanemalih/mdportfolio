import { Component, OnInit } from '@angular/core';
import {UserconfigService} from "../../controller/service/userconfig.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private userconfigService:UserconfigService) { }

  ngOnInit(): void {
  }

  get menuState(): boolean {
    return this.userconfigService.menuState;
  }

  get useDarkMode(): boolean {
    return this.userconfigService.useDarkMode;
  }
}
