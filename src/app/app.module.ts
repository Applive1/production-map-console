import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';
import { TreeModule } from 'angular2-tree-component';
import { ContextMenuModule } from 'angular2-contextmenu';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FileUploadModule } from 'ng2-file-upload';
import { CalendarModule } from 'angular2-calendar';
import { ResizableModule } from 'angular2-resizable';

import { AuthenticationService } from './shared/services/authentication.service';
import { routing, appRoutingProviders } from './app.routing';
import { ConstsService } from './shared/services/consts.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapsRootComponent } from './maps-root/maps-root.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MapManagmentComponent } from './map-managment/map-managment.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CalendarComponent } from './admin-panel/calendar/calendar.component';
import { LeftPanelComponent } from './map-managment/left-panel/left-panel.component';
import { MapEditorComponent } from './map-managment/map-editor/map-editor.component';
import { MapSettingsComponent } from './map-managment/map-settings/map-settings.component';
import { MessagesComponent } from './map-managment/messages/messages.component';
import { MapExplorerComponent } from './map-managment/left-panel/map-explorer/map-explorer.component';
import { MapToolboxComponent } from './map-managment/left-panel/map-toolbox/map-toolbox.component';
import { ExecutionReportComponent } from './map-managment/left-panel/map-explorer/execution-report/execution-report.component';
import { ItemExecutionResultComponent } from './map-managment/left-panel/map-explorer/execution-report/item-execution-result/item-execution-result.component';
import { MapAttributesComponent } from './map-managment/map-settings/map-attributes/map-attributes.component';
import { MapDesignerComponent } from './map-managment/map-editor/map-designer/map-designer.component';
import { MapMarkupComponent } from './map-managment/map-editor/map-markup/map-markup.component';
import { MapCodeEditorComponent } from './map-managment/map-editor/map-code-editor/map-code-editor.component';
import { MapServersComponent } from './map-managment/map-settings/map-servers/map-servers.component';
import { MapAttributeComponent } from './map-managment/map-settings/map-attributes/map-attribute/map-attribute.component';
import { ProcessesComponentWindow } from './map-managment/map-editor/map-designer/processes/processes.component';
import { NewProcessComponentWindow } from './map-managment/map-editor/map-designer/new-process/new-process.component';
import { ActionsComponentWindow } from './map-managment/map-editor/map-designer/action/action.component';
import { ExecutionChartComponent } from './map-managment/left-panel/map-explorer/execution-report/item-execution-result/execution-chart/execution-chart.component';
import { DedicatedAgentsComponent } from './admin-panel/dedicated-agents/dedicated-agents.component';
import { AddDedicatedAgentComponentWindow } from './admin-panel/dedicated-agents/add-dedicated-agent/add-dedicated-agent.component';
import { ShowDedicatedAgentComponent } from './admin-panel/dedicated-agents/show-dedicated-agent/show-dedicated-agent.component';
import { ServersComponent } from './admin-panel/servers/servers.component';
import { EventsSchedulerComponent } from './admin-panel/calendar/events-scheduler/events-scheduler.component';
import { RegisterComponent } from './register/register.component';
import { NewMapComponentWindow } from "./map-managment/left-panel/map-explorer/popups/new-map/new-map.component";
import { NewProjectComponentWindow } from "./map-managment/left-panel/map-explorer/popups/new-project/new-project.component";
import { MessagePopupComponent } from './map-managment/messages/message-popup/message-popup.component';
import { DraggableDirective } from './directives/draggable.directive';
import { EditAgentComponentWindow } from './admin-panel/servers/edit-agent/edit-agent.component';
import { UpdateMapComponentWindow } from './map-managment/left-panel/map-explorer/popups/update-map/update-map.component';
import { AttributeWindow } from './shared/popups/attribute-window/attribute-window.component';
import { ServerFilterPipe } from './admin-panel/servers/server-filter.pipe';
import { MapVersionsComponent } from './map-managment/left-panel/map-explorer/popups/map-versions/map-versions.component';
import { MapExecutionsComponent } from './map-managment/left-panel/map-explorer/popups/map-executions/map-executions.component';


/* define the prefix for localstoraget when user add key value the prefix pm-app is added to the key */
let localStorageServiceConfig = {
  prefix: 'pm-app',
  storageType: 'sessionStorage'
};

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, LoginComponent, PageNotFoundComponent, MapsRootComponent, SideBarComponent, MapManagmentComponent, AdminPanelComponent, CalendarComponent, LeftPanelComponent, MapEditorComponent, MapSettingsComponent, MessagesComponent, MapExplorerComponent, MapToolboxComponent, ExecutionReportComponent, ProcessesComponentWindow, ActionsComponentWindow, NewProcessComponentWindow, ItemExecutionResultComponent, MapAttributesComponent, MapDesignerComponent, MapMarkupComponent, MapCodeEditorComponent, MapServersComponent, MapAttributeComponent, ExecutionChartComponent, DedicatedAgentsComponent, AddDedicatedAgentComponentWindow, ShowDedicatedAgentComponent, ServersComponent, EventsSchedulerComponent, RegisterComponent, NewProjectComponentWindow, NewMapComponentWindow, MessagePopupComponent, DraggableDirective, EditAgentComponentWindow, UpdateMapComponentWindow, AttributeWindow, ServerFilterPipe, MapVersionsComponent, MapExecutionsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    TreeModule,
    ChartsModule,
    ContextMenuModule,
    CalendarModule.forRoot(),
    FileUploadModule,
    ResizableModule,
    routing
  ],
  providers: [
    AuthenticationService,
    LocalStorageService,
    {
      provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
    },
    appRoutingProviders,
    ConstsService
  ],
  entryComponents: [NewProjectComponentWindow, NewMapComponentWindow, ExecutionReportComponent,
                    ProcessesComponentWindow, NewProcessComponentWindow, ActionsComponentWindow,
                    AddDedicatedAgentComponentWindow, MessagePopupComponent, EditAgentComponentWindow,
                    UpdateMapComponentWindow, AttributeWindow, MapVersionsComponent, MapExecutionsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
