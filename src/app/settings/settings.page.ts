/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eqeqeq */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { ToggleChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() {

   }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    let m = document.getElementById('appThemeSwitch');
    if(localStorage.getItem('appThemeMode')==null)
    {
      localStorage.setItem('appThemeMode','md');
    }
    if(localStorage.getItem('appThemeMode')=="md")
    {
      m.setAttribute('checked','false');
    }
    if(localStorage.getItem('appThemeMode')=="ios")
    {
      m.setAttribute('checked','true');
    }
  }

  themeToggle(){
    let m = document.getElementById('appThemeSwitch');
    m.setAttribute('disabled','true');
    if(localStorage.getItem('appThemeMode')=="md")
    {
      localStorage.setItem('appThemeMode','ios');
    }
    else if(localStorage.getItem('appThemeMode')=="ios")
    {
      localStorage.setItem('appThemeMode','md');
    }
    else{
      localStorage.setItem('appThemeMode','md');
    }
    console.log('yes');
    window.location.reload();
  }
}
