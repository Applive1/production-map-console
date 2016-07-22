"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// declare var jointjs:any;
var core_1 = require('@angular/core');
var jointjs = require('jointjs');
var MapDesignerComponent = (function () {
    function MapDesignerComponent() {
        this._jointjs = jointjs;
    }
    MapDesignerComponent.prototype.ngOnInit = function () {
    };
    MapDesignerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pm-map-designer',
            templateUrl: 'map-designer.component.html',
            styleUrls: ['map-designer.component.css']
        })
    ], MapDesignerComponent);
    return MapDesignerComponent;
}());
exports.MapDesignerComponent = MapDesignerComponent;
//# sourceMappingURL=map-designer.component.js.map