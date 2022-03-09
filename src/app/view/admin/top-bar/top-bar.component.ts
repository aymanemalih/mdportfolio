import { Component, OnInit } from '@angular/core';
import {UserconfigService} from "../../../controller/service/userconfig.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private userconfigService:UserconfigService) { }

  ngOnInit(): void {
  }

  get menuState(): boolean {
    return this.userconfigService.menuState;
  }

  menuSwitch(){
    this.userconfigService.menuState = !this.menuState;
  }
}
