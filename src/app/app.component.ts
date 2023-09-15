import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appThemeMode = 'md';
  public appPages = [
    { title: 'Radio Channels', url: '/radioChannels', icon: 'radio' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
    { title: 'About', url: '/about', icon: 'information' }
  ];
  public audio = new Audio();
  public volume = [
    {value:'0.2'}
  ];
  public labels = [];
  constructor() {
    if(localStorage.getItem('appThemeMode')!=null)
    {
      this.appThemeMode = localStorage.getItem('appThemeMode');
    }
  }
  eventHandler(keyCode){
    console.log(keyCode);
  }
}
