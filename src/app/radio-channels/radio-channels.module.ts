import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioChannelsPageRoutingModule } from './radio-channels-routing.module';

import { RadioChannelsPage } from './radio-channels.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioChannelsPageRoutingModule,
    BrowserModule,
    CommonModule
  ],
  declarations: []
})
export class RadioChannelsPageModule {}
