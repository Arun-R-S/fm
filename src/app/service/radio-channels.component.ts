import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This specifies that the service should be provided at the root level
})
/* eslint-disable max-len */
export class RadioService{
  radioChannels!: any;
  constructor(private http: HttpClient){
    this.radioChannels = this.fetchDataFromURL();
  }

//   public radioChannels = [
//     { name: '92.7 Big FM', url: 'https://tamil.tanradio.com:7002/4', icon: '../../assets/images/bigfm.jpg', volumeBoost: 35, isLive: true },
//     { name: '98.3 Radio Mirchi', url: 'https://tamil.tanradio.com:7002/1', icon: '../../assets/images/radio-mirchi.jpg', volumeBoost: 0, isLive: true },
//     { name: '106.4 Hello FM', url: 'https://tamil.tanradio.com:7002/3', icon: '../../assets/images/hello-fm.jpg', volumeBoost: 15, isLive: true },
//     { name: '93.5 Suryan FM', url: 'http://209.133.216.3:7071/;stream.mp3', icon: '../../assets/images/suryan-fm.jpg', volumeBoost: 0, isLive: true },
//     { name: 'GV Prakash FM', url: 'https://southradios.net/play/gvprakashradio', icon: '../../assets/images/gv-prakash-radio.jpg', volumeBoost: 0, isLive: true },
//     { name: 'Vanakkam FM', url: 'https://stream.zenolive.com/8rnkv9qrxueuv.aac', icon: '../../assets/images/vanakkam-fm.jpg', volumeBoost: 0, isLive: false },
//     { name: '100.5 Kodai FM', url: 'http://163.172.165.94:8300/kodaifm', icon: '../../assets/images/kodai-fm.jpg', volumeBoost: 0, isLive: false },
//     { name: '91.1 Radio City', url: 'https://stream.zeno.fm/u5p1nw3zrf9uv', icon: '../../assets/images/radio-city.jpg', volumeBoost: 0, isLive: true },
//     { name: 'AR Rahman FM', url: 'https://southradios.net/play/arrahmanradio', icon: '../../assets/images/ar-rahman.jpg', volumeBoost: 0, isLive: true },
//     { name: 'Illayaraja FM', url: 'https://southradios.net/play/ilayarajaradio', icon: '../../assets/images/ilayaraja.jpg', volumeBoost: 0, isLive: true },
//     { name: 'Thala Thalapathy FM', url: 'https://southradios.net/play/thalathalapathyradio', icon: '../../assets/images/thala-thalapathy.jpg', volumeBoost: 0, isLive: true },
//     { name: 'Harrish Jayaraj FM', url: 'https://southradios.net/play/harrishjeyarajradio', icon: '../../assets/images/harrish-jayaraj.jpg', volumeBoost: 0, isLive: true },
//     { name: 'SPB Radio', url: 'https://stream.zeno.fm/w2r2z0x547zuv', icon: '../../assets/images/spb-fm.jpg', volumeBoost: 0, isLive: true },
// ];
fetchDataFromURL() {
  const url = environment.url; // Replace with your URL
  this.http.get(url+'?timestamp='+new Date().getTime()).subscribe((data: any) => {
    //console.log(data); // Handle the JSON data here
    this.radioChannels= data;
  }, (error: any) => {
    console.error('Error:', error); // Handle any error that occurred
    //console.error('Error:', error); // Handle any error that occurred
    this.radioChannels = ([]);
  });
  //return ({url:"",isAllow:false})
  //this.redirect();
}
}
