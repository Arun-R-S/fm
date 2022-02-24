import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Radio Channels', url: '/radioChannels', icon: 'radio' }
  ];
  public audio = new Audio();
  public volume = [
    {value:'0.2'}
  ];
  public labels = [];
  constructor() {}
}
