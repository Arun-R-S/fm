/* eslint-disable prefer-const */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable max-len */

import { Component, Injectable, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import * as $ from 'jquery';
import { AudioService } from '../service/audio-service.component';

@Component({
  selector: 'app-radio-channels',
  templateUrl: './radio-channels.page.html',
  styleUrls: ['./radio-channels.page.scss'],

})

export class RadioChannelsPage implements OnInit {
  volumeBoost = 0;
  volumeConvert = 1;
  radioPlaying = 'Select a radio';
  public radioChannels = [
    { name: '92.7 Big FM', url: 'http://213.32.90.126:5006/1', icon: '../../assets/images/bigfm.jpg', volumeBoost: 20 ,isLive:true},
    { name: '98.3 Radio Mirchi', url: 'http://213.32.90.126:5000/1', icon: '../../assets/images/radio-mirchi.jpg', volumeBoost: 0,isLive:true },
    { name: '106.4 Hello FM', url: 'http://213.32.90.126:5010/1', icon: '../../assets/images/hello-fm.jpg', volumeBoost: 15 ,isLive:true},
    { name: '93.5 Suryan FM', url: 'http://209.133.216.3:7071/;stream.mp3', icon: '../../assets/images/suryan-fm.jpg', volumeBoost: 0 ,isLive:true},
    { name: 'Hello FM Chennai', url: 'https://listen.openstream.co/6803/audio', icon: '../../assets/images/hello-fm-chennai.jpg', volumeBoost: 0 ,isLive:true},
    { name: 'Vanakkam FM', url: 'https://stream.zenolive.com/8rnkv9qrxueuv.aac', icon: '../../assets/images/vanakkam-fm.jpg', volumeBoost: 0 ,isLive:false},
    { name: '100.5 Kodai FM', url: 'http://163.172.165.94:8300/kodaifm', icon: '../../assets/images/kodai-fm.jpg', volumeBoost: 0 ,isLive:false},
    { name: '91.1 Radio City', url: 'https://stream.zeno.fm/u5p1nw3zrf9uv', icon: '../../assets/images/radio-city.jpg', volumeBoost: 0 ,isLive:true},
    { name: 'AR Rahman FM', url: 'https://southradios.net/play/arrahmanradio', icon: '../../assets/images/ar-rahman.jpg', volumeBoost: 0 ,isLive:true},
    { name: 'Illayaraja FM', url: 'https://southradios.net/play/ilayarajaradio', icon: '../../assets/images/ilayaraja.jpg', volumeBoost: 0 ,isLive:true},
    { name: 'Thala Thalapathy FM', url: 'https://southradios.net/play/thalathalapathyradio', icon: '../../assets/images/thala-thalapathy.jpg', volumeBoost: 0 ,isLive:true},
    { name: 'Harrish Jayaraj FM', url: 'https://southradios.net/play/harrishjeyarajradio', icon: '../../assets/images/harrish-jayaraj.jpg', volumeBoost: 0 ,isLive:true},
    { name: 'SPB Radio', url: 'https://stream.zeno.fm/w2r2z0x547zuv', icon: '../../assets/images/spb-fm.jpg', volumeBoost: 0 ,isLive:true},
  ];
  constructor(
    private player: AudioService
  ) {

  }

  ngOnInit() {
    if (localStorage.getItem('vol') == null) {
      this.player.audio.volume = 0.3;
      localStorage.setItem('vol', '0.3');
    }
    else {
      this.player.audio.volume = Number(localStorage.getItem('vol')) + (this.volumeBoost / 200);

    }

  }

  ngAfterViewInit(): void {
    if (localStorage.getItem('vol') == null) {
      $('#volume').val('1');
    }
    else {
      //console.log(Number(localStorage.getItem('vol')) * 200);
      $('#volume').val(Number(localStorage.getItem('vol')) * 200);
    }

  }

  selectRadio(url, id, name) {
    try {
      $('.card.active').removeClass('active');
    }
    finally { }
    $('#rad' + id).addClass('active');
    this.volumeBoost = this.radioChannels[id].volumeBoost;
    //console.log(this.radioChannels[id].volumeBoost);
    let playButton = (document.getElementById('playButton') as HTMLElement);
    playButton.setAttribute('name', 'pause');
    this.radioPlaying = name;
    this.refreshVolume();
    this.player.audio.pause();
    this.player.audio.src = url;
    this.player.audio.load();
    this.player.audio.play();
  }
  radioStop() {
    try {
      $('.card.active').removeClass('active');
    }
    finally { }
    let playButton = (document.getElementById('playButton') as HTMLElement);
    this.player.audio.pause();
    playButton.setAttribute('name', 'play');
    this.radioPlaying = 'Select a radio';
  }
  refreshVolume() {
    this.player.audio.volume = (Number(localStorage.getItem('vol')) + (this.volumeBoost / 200));
  }

  volume(vol) {
    //console.log(typeof(vol.detail.value));
    this.player.audio.volume = (vol.detail.value + this.volumeBoost) / 200;

    localStorage.setItem('vol', (vol.detail.value / 200).toString());
  }

  togglePlay() {
    let playButton = (document.getElementById('playButton') as HTMLElement);
    if (this.player.audio.src !== '') {

      if (playButton.getAttribute('name') === 'play') {
        this.player.audio.load();
        this.player.audio.play();
        playButton.setAttribute('name', 'pause');
      }
      else {
        this.player.audio.pause();
        playButton.setAttribute('name', 'play');
      }
    }
  }

}
