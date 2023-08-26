import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  existItem(key: string): boolean {
    return (key in localStorage);
  }

  existItems(keys: Array<string>): boolean {
    let existItems = true;
    keys.forEach(key => {
      if (!(key in localStorage)) {
        existItems = false;
      }
    });
    return existItems;
  }

  getItemString(key: string) {
    return localStorage.getItem(key);
  }
  stringifyItem(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  parseItem<T>(key: any): T {
    let object: any = localStorage.getItem(key);
    return JSON.parse(object) as T;
  }

  setItem(key: string, item: any) {
    localStorage.setItem(key, item);
  }

  getItemJSON(key: string) {
    return JSON.parse(localStorage.getItem(key) ?? "");
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  removeAllItems() {
    localStorage.clear();
  }

}
