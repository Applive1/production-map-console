import { Component, ViewChild, ElementRef, ViewQuery, OnInit, Input, OnDestroy } from '@angular/core';
import { COMMON_DIRECTIVES  } from '@angular/common';

import { LibPMService } from '../shared/services/libpm.service';

import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'pm-map-code-editor',
  templateUrl: 'map-code-editor.component.html',
  styleUrls: ['map-code-editor.component.css'],
  directives: [COMMON_DIRECTIVES]
})
export class MapCodeEditorComponent implements OnInit, OnDestroy {

  @ViewChild('editor') editorContent: ElementRef;
  @Input() map: any = {};
  private monaco: any;


  constructor(private libpmService: LibPMService) {
    this.monaco = this.libpmService.getMonacoObject();
  }

  // Will be called once monaco library is available
  ngOnInit() {
    let myDiv: HTMLDivElement = this.editorContent.nativeElement;


    this.libpmService.getLibPM().subscribe((result) => {
      try {
        /* add libproduction map, load it only once */
        this.monaco.languages.typescript.javascriptDefaults.addExtraLib(result, 'productionMap/pm-lib.d.ts');
      } catch (ex) {
        console.log(ex);
      }

    });

    /* load the mapView */
    try {
      this.libpmService.addMap(this.map.mapView);
    } catch (ex) {
      console.log(ex);
    }

    let editor = this.monaco.editor.create(myDiv, {
      value: this.map.mapView.code,
      theme: 'vs-dark',
      language: 'javascript',
      allowNonTsExtensions: true
    });
  }

  ngOnDestroy() {
    try {
      this.libpmService.removeAllLibs();
    } catch (ex) {
      console.log(ex);
    }
  }
}
