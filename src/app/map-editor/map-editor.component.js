"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var map_designer_component_1 = require("../map-designer/map-designer.component");
var map_markup_component_1 = require("../map-markup/map-markup.component");
var map_code_editor_component_1 = require("../map-code-editor/map-code-editor.component");
var common_1 = require("@angular/common");
var MapEditorComponent = (function () {
    function MapEditorComponent() {
        this.currentPanel = 0;
    }
    MapEditorComponent.prototype.ngOnInit = function () {
    };
    MapEditorComponent.prototype.selectPanel = function (panelId) {
        this.currentPanel = panelId;
    };
    MapEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pm-map-editor',
            templateUrl: 'map-editor.component.html',
            styleUrls: ['map-editor.component.css'],
            directives: [map_designer_component_1.MapDesignerComponent, map_markup_component_1.MapMarkupComponent, map_code_editor_component_1.MapCodeEditorComponent, common_1.NgSwitch, common_1.NgSwitchCase]
        })
    ], MapEditorComponent);
    return MapEditorComponent;
}());
exports.MapEditorComponent = MapEditorComponent;
//# sourceMappingURL=map-editor.component.js.map