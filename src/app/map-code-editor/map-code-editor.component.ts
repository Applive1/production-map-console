import { Component, ViewChild, ElementRef, ViewQuery, OnInit, Input } from '@angular/core';
import { COMMON_DIRECTIVES  } from '@angular/common';

import { LibPMService } from '../shared/services/libpm.service';

import * as _ from 'lodash';

declare const monaco: any;
declare const require: any;



@Component({
  moduleId: module.id,
  selector: 'pm-map-code-editor',
  templateUrl: 'map-code-editor.component.html',
  styleUrls: ['map-code-editor.component.css'],
  directives: [COMMON_DIRECTIVES],
  providers: [LibPMService]
})
export class MapCodeEditorComponent {

  @ViewChild('editor') editorContent: ElementRef;
  @Input() map: any = {};

  private firstInit: boolean = true;
  constructor(private libpmService: LibPMService) {
    this.firstInit = true;
  }

  ngAfterViewInit() {
    let onGotAmdLoader = () => {
      // Load monaco
      (<any>window).require(['vs/editor/editor.main'], () => {
        this.initMonaco();
      });
    };

    // Load AMD loader if necessary
    if (!(<any>window).require) {
      let loaderScript = document.createElement('script');
      loaderScript.type = 'text/javascript';
      loaderScript.src = 'vs/loader.js';
      loaderScript.addEventListener('load', onGotAmdLoader);
      document.body.appendChild(loaderScript);
    } else {
      onGotAmdLoader();
    }
  }

  // Will be called once monaco library is available
  initMonaco() {
    let myDiv: HTMLDivElement = this.editorContent.nativeElement;

    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES6,
      allowNonTsExtensions: true,

    });



    this.libpmService.getLibPM().subscribe((result) => {
      try {
        /* add libproduction map, load it only once */
        monaco.languages.typescript.javascriptDefaults.addExtraLib(result, 'productionMap/pm-lib.d.ts');
      } catch (ex) {
        console.log(ex);
      }

      try {
        this.libpmService.addMap(monaco, this.map);
      } catch (ex) {
        console.log(ex);
      }


    });


    let editor = monaco.editor.create(myDiv, {
      value: this.map.code,
      theme: 'vs-dark',
      language: 'javascript',
      allowNonTsExtensions: true
    });
  }
}
