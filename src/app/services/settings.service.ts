import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
    public linkTheme = document.querySelector('#theme');


  constructor() {

    console.log('zdarova');

const url=localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';



    this.linkTheme.setAttribute('href',url);



  }
}
