import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
   public linkTheme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(theme: string){

    const url = `./assets/css/colors/${theme}.css`;



    this.linkTheme.setAttribute('href',url);
    localStorage.setItem('theme',url);

  }




}
