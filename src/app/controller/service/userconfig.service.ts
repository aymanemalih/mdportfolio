import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserconfigService {

  private _menuState: boolean = false;
  private _useDarkMode: boolean = false;

  constructor() { }


  get menuState(): boolean {
    return this._menuState;
  }

  set menuState(value: boolean) {
    this._menuState = value;
  }


  get useDarkMode(): boolean {
    return this._useDarkMode;
  }

  set useDarkMode(value: boolean) {
    this._useDarkMode = value;
  }
}
