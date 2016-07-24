"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var map_attributes_component_1 = require("../map-attributes/map-attributes.component");
var map_servers_component_1 = require("../map-servers/map-servers.component");
var common_1 = require("@angular/common");
var MapSettingsComponent = (function () {
    function MapSettingsComponent() {
        this.currentPanel = 1;
    }
    MapSettingsComponent.prototype.ngOnInit = function () {
    };
    MapSettingsComponent.prototype.selectPanel = function (panelId) {
        this.currentPanel = panelId;
    };
    MapSettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pm-map-settings',
            templateUrl: 'map-settings.component.html',
            styleUrls: ['../shared/css/map-bar.css', 'map-settings.component.css'],
            directives: [map_attributes_component_1.MapAttributesComponent, map_servers_component_1.MapServersComponent, common_1.NgSwitch, common_1.NgSwitchCase]
        })
    ], MapSettingsComponent);
    return MapSettingsComponent;
}());
exports.MapSettingsComponent = MapSettingsComponent;
//# sourceMappingURL=map-settings.component.js.map