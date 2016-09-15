import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapsRootComponent } from './maps-root/maps-root.component';
import { MapManagmentComponent } from './map-managment/map-managment.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/app/map', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'app', component: MapsRootComponent,
        children: [
            { path: 'map', component: MapManagmentComponent },
            { path: 'admin', component: AdminPanelComponent },
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
