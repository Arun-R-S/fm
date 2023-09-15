import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutPage } from './about/about.page';
import { RadioChannelsPage } from './radio-channels/radio-channels.page';


const routes: Routes = [
  {
    path:'',
    redirectTo:'radioChannels',
    pathMatch:'full'
  },
  {
    path: 'radioChannels',
    component: RadioChannelsPage
  },
  {
    path:'about',
    component:AboutPage
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'radioChannels',
    loadChildren: () => import('./radio-channels/radio-channels.module').then( m => m.RadioChannelsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
