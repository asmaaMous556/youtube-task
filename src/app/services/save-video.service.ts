import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SaveVideoService {

  constructor() { }

  saveVideoToFvList(key:string){
   return  localStorage.setItem(key,'id');
  }
}
