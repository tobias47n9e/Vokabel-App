import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jakob-page',
  templateUrl: './jakob-page.page.html',
  styleUrls: ['./jakob-page.page.scss'],
})
export class JakobPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
geklickt() {
  console.log ("klick")
}
}
