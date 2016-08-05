import { Injectable } from '@angular/core';

@Injectable()
export class PopupsService {
    activate: (messageq?: string, title?: string) => Promise<boolean>;
}