import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { RadioChannelsPage } from './radio-channels.page';

const routes: Routes = [
  {
    path: '',
    component: RadioChannelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),BrowserModule,CommonModule],
  exports: [RouterModule],
})
export class RadioChannelsPageRoutingModule {}
