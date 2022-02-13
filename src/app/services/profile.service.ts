import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}
  sessionUserName: string = 'userData';

  setData(data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('myData', jsonData);
  }

  getSessionUserData(user: any) {
    if (sessionStorage.getItem(this.sessionUserName) == null) {
      this.saveSessionStorage(user);
    }
    return sessionStorage.getItem(this.sessionUserName);
  }
  saveSessionStorage(item: any[]) {
    sessionStorage.setItem(this.sessionUserName, JSON.stringify(item));
  }
}
