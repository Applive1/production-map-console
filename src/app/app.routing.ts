import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapsRootComponent } from './maps-root/maps-root.component';
import { MapManagmentComponent } from './map-managment/map-managment.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CalendarComponent } from './admin-panel/calendar/calendar.component';
import { DedicatedAgentsComponent } from './admin-panel/dedicated-agents/dedicated-agents.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/app/map', pathMatch: 'full' },
    { path: 'app/admin', redirectTo: '/app/admin/calendar', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'app', component: MapsRootComponent,
        children: [
            { path: 'map', component: MapManagmentComponent },
            {
                path: 'admin',
                component: AdminPanelComponent,
                children: [
                    { path: 'calendar', component: CalendarComponent },
                    { path: 'dedicatedAgents', component: DedicatedAgentsComponent }
                ]
            },
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
