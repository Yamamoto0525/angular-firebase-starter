import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {

  fetch(KEY: string): any {
    return JSON.parse(sessionStorage.getItem(KEY)) || null;
  }

  add(item: any, KEY: string): void {
    sessionStorage.setItem(KEY, JSON.stringify(item));
  }

  clear(KEY: string): void {
    sessionStorage.removeItem(KEY);
  }

}
