import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sample-top.component.html',
  styleUrls: ['./sample-top.component.scss']
})
export class SampleTopComponent implements OnInit {

  title: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = 'sample-angular';
  }

}
