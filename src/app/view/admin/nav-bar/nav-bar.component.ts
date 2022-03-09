import {Component, OnInit} from '@angular/core';
import {UserconfigService} from "../../../controller/service/userconfig.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private userconfigService: UserconfigService) {
  }

  get menuState(): boolean {
    return this.userconfigService.menuState;
  }

  get useDarkMode(): boolean {
    return this.userconfigService.useDarkMode;
  }

  modeName: string = 'Light Mode';

  ngOnInit(): void {
  }

  modeSwitch():void{
    this.userconfigService.useDarkMode = !this.useDarkMode;
    if(this.useDarkMode){
      this.modeName = ('Dark mode');
    }else{
      this.modeName = ('Light mode');
    }
  }
}
