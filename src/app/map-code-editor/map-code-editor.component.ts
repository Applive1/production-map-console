import { Component, ViewChild, ElementRef, ViewQuery, OnInit, Input }
from '@angular/core';
import { COMMON_DIRECTIVES  }
from '@angular/common';

import * as _ from 'lodash';

declare const monaco: any;
declare const require: any;



@Component({
  moduleId: module.id,
  selector: 'pm-map-code-editor',
  templateUrl: 'map-code-editor.component.html',
  styleUrls: ['map-code-editor.component.css'],
  directives: [COMMON_DIRECTIVES]
})
export class MapCodeEditorComponent {

  @ViewChild('editor') editorContent: ElementRef;
  @Input() map: any = {};

  private firstInit: boolean;
  constructor() {
    this.firstInit = true;
  }

  ngAfterViewInit() {
    var onGotAmdLoader = () => {
      // Load monaco
      (<any>window).require(['vs/editor/editor.main'], () => {
        this.initMonaco();
      });
    };

    // Load AMD loader if necessary
    if (!(<any>window).require) {
      var loaderScript = document.createElement('script');
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
    if (this.firstInit === false) {
      return;
    }
    this.firstInit = false;
    let myDiv: HTMLDivElement = this.editorContent.nativeElement;

    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES6,
      allowNonTsExtensions: true
    });

    // extra libraries
    monaco.languages.typescript.javascriptDefaults.addExtraLib([
      'let map =  {',
      '    "a": 2',
      '    "b": [1, 2, 3]',
      '}',
    ].join('\n'), 'filename/pm-lib.d.ts');


    let editor = monaco.editor.create(myDiv, {
      value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}'
      ].join('\n'),
      theme: 'vs-dark',
      language: 'javascript',
      allowNonTsExtensions: true
    });
  }
}
