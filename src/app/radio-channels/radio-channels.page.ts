/* eslint-disable space-before-function-paren */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable prefer-const */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable max-len */

import { Component, HostListener, Injectable, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import * as $ from 'jquery';
import { AudioService } from '../service/audio-service.component';
import { RadioService } from '../service/radio-channels.component';

@Component({
  selector: 'app-radio-channels',
  templateUrl: './radio-channels.page.html',
  styleUrls: ['./radio-channels.page.scss'],

})

export class RadioChannelsPage implements OnInit {
  volumeBoost = 0;
  volumeConvert = 100;
  currentVolume = 20;
  rangeMin = 0;
  rangeMax = 100;
  rangeStep = 1;
  radioPlaying = 'Select a radio';

  constructor(
    public player: AudioService,
    public r: RadioService
  ) {

  }

  @HostListener('window:keydown', ['$event'])

  onKeyDown(event: KeyboardEvent) {
    console.log(event.key);

    //space key
    if (event.key == ' ') {
      if (this.player.audio.paused) {
        this.player.audio.load();
        this.player.audio.play();
      }
      else {
        this.player.audio.pause();
      }
    }

    //right key
    if (event.key == 'ArrowRight') {
      this.nextFM();
    }

    //left key
    if (event.key == 'ArrowLeft') {
      this.previousFM();
    }

    //up key
    if (event.key == 'ArrowUp') {
      if ((Number(this.player.audio.volume) * 100)-this.volumeBoost + 7 >= 99) {
        this.currentVolume = 100;
      }
      else {
        this.currentVolume = (Number(this.player.audio.volume)* 100)-this.volumeBoost + 7;
      }

    }

    //down key
    if (event.key == 'ArrowDown') {
      //console.log(((this.player.audio.volume) * 100)-this.volumeBoost);
      if (((this.player.audio.volume) * 100)-this.volumeBoost - 7 <= 0) {
        this.currentVolume = 0;
      }
      else {
        this.currentVolume = ((this.player.audio.volume) * 100)-this.volumeBoost - 7;
      }

    }

  }

  ngOnInit() {

    console.log(this.player);

    if (localStorage.getItem('vol') == null) {
      this.player.audio.volume = 0.3;
      localStorage.setItem('vol', '0.3');
    }
    else {
      this.setVolume(Number(localStorage.getItem('vol')) * this.volumeConvert);
    }
  }
  getAudioStatus() {
    console.log(this.player);
  }
  ngAfterViewInit(): void {

  }
  loaded(){
    console.log('loaded');
  }
  selectRadioCard(id) {
    this.radioPlaying = this.r.radioChannels[id].name;
    localStorage.setItem('selectedRadioId', id);
  }



  nextFM(){
    if (this.player.audio.accessKey == '') {
      this.selectRadio(this.r.radioChannels[0].url, 0, this.r.radioChannels[0].name);
    }
    else {
      if (Number(this.player.audio.accessKey) + 1 == this.r.radioChannels.length) {
        this.selectRadio(this.r.radioChannels[0].url, 0, this.r.radioChannels[0].name);
      }
      else {
        this.selectRadio(this.r.radioChannels[Number(this.player.audio.accessKey) + 1].url,
          Number(this.player.audio.accessKey) + 1,
          this.r.radioChannels[Number(this.player.audio.accessKey) + 1].name);

      }
    }
  }

  previousFM(){
    if (this.player.audio.accessKey == '') {
      this.selectRadio(this.r.radioChannels[0].url, 0, this.r.radioChannels[0].name);
    }
    else {
      if (Number(this.player.audio.accessKey) - 1 < 0) {
        this.selectRadio(this.r.radioChannels[this.r.radioChannels.length - 1].url, this.r.radioChannels.length - 1, this.r.radioChannels[this.r.radioChannels.length - 1].name);
      }
      else {
        this.selectRadio(this.r.radioChannels[Number(this.player.audio.accessKey) - 1].url,
          Number(this.player.audio.accessKey) - 1,
          this.r.radioChannels[Number(this.player.audio.accessKey) - 1].name);

      }
    }
  }

  selectRadio(url, id, name) {
    if (this.player.audio.src == url) {
      return;
    }
    this.player.audio.volume = this.player.audio.volume - (this.volumeBoost / 100);
    this.selectRadioCard(id);
    this.volumeBoost = this.r.radioChannels[id].volumeBoost;
    //console.log(this.radioChannels[id].volumeBoost);
    this.radioPlaying = name;
    this.player.audio.accessKey = id;
    this.player.audio.pause();
    this.player.audio.src = url;
    this.player.audio.load();
    this.player.audio.volume += (this.volumeBoost / 100);
    // console.log(this.player.audio.volume);
    // console.log(this.volumeBoost);
    this.player.audio.play();
  }

  radioStop() {
    this.player.audio.pause();
    this.player.audio.src = '';
    this.radioPlaying = 'Select a radio';
  }

  refreshVolume() {
    this.player.audio.volume = (Number(localStorage.getItem('vol')) + (this.volumeBoost / this.volumeConvert));
  }

  setVolume(vol) {

    if ((vol + this.volumeBoost) / this.volumeConvert >= 1) {
      this.player.audio.volume = 1;
      this.currentVolume = 100;
      localStorage.setItem('vol', '1');
      return;
    }
    this.player.audio.volume = (vol + this.volumeBoost) / this.volumeConvert;
    this.currentVolume = (vol + this.volumeBoost);
    localStorage.setItem('vol', (vol / this.volumeConvert).toString());
  }

  volume(vol) {
    //console.log(vol);
    if (vol.detail.value === 0) {
      this.player.audio.volume = 0;
      localStorage.setItem('vol', '0');
      return;
    }
    //console.log(((vol.detail.value + this.volumeBoost) / this.volumeConvert));
    if ((vol.detail.value + this.volumeBoost) / this.volumeConvert >= 1) {
      this.player.audio.volume = 1;
      localStorage.setItem('vol', '1');
      return;
    }
    this.player.audio.volume = (vol.detail.value + this.volumeBoost) / this.volumeConvert;
    localStorage.setItem('vol', (vol.detail.value / this.volumeConvert).toString());
  }

  togglePlay() {
    if (this.player.audio.paused) {
      this.player.audio.load();
      this.player.audio.play();
    }
    else {
      this.player.audio.pause();
    }
  }
  getRadioName(src) {
    for (let i = 0; i < this.r.radioChannels.length; i++) {
      if (this.r.radioChannels[i].url == src) {
        return this.r.radioChannels[i].name;
      }
    }
    return 'Name Error';
  }

}
