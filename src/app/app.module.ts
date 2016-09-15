import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';

import { AuthenticationService } from './shared/authentication.service';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapsRootComponent } from './maps-root/maps-root.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MapManagmentComponent } from './map-managment/map-managment.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CalendarComponent } from './admin-panel/calendar/calendar.component';

/* define the prefix for localstoraget when user add key value the prefix pm-app is added to the key */
let localStorageServiceConfig = {
  prefix: 'pm-app',
  storageType: 'sessionStorage'
};

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, LoginComponent, PageNotFoundComponent, MapsRootComponent, SideBarComponent, MapManagmentComponent, AdminPanelComponent, CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    routing
  ],
  providers: [
    AuthenticationService,
    LocalStorageService,
    {
      provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
    },
    appRoutingProviders
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
