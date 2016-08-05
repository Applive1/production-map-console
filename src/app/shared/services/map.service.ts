import { Injectable } from '@angular/core';

import { MAPS } from './mock-maps';

@Injectable()
export class MapService {
  getMap() {
    return MAPS;
  }

  getMapVersion() {
    
  }
}