import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
 getTime(){
    let dateObj: Date = new Date();
    return `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()}
                   ${dateObj.getHours()}:${dateObj.getMinutes()}`;
  }
}
