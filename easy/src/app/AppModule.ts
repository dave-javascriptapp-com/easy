import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DashModule } from './dash/DashModule';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './AppService';

import { AppMain } from './app-main';
import { AppHeader } from './app-header';
import { AppWelcome } from './app-welcome';
import { AppTotal } from './app-total';
import { AppShowCode } from './app-show-code';
import { AppUserForm } from './app-user-form';

@NgModule({
  declarations: [
    AppMain,
    AppHeader,
    AppWelcome,
    AppTotal,
    AppShowCode,
    AppUserForm
  ],
  entryComponents: [
    // AppPage1
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DashModule,
    HttpClientModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    AppMain
  ]
})
export class AppModule { }
