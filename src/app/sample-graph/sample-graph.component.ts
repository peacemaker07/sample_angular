import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

import { Chart, ChartData, ChartOptions } from 'chart.js';

@Component({
  templateUrl: './sample-graph.component.html',
  styleUrls: ['./sample-graph.component.scss']
})
export class SampleGraphComponent implements OnInit, AfterViewInit {

  constructor(
    private _elementRef: ElementRef,
  ) { }

  @ViewChild('canvas') ref!: ElementRef;

  context!: CanvasRenderingContext2D;
  chart!: Chart;

  data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  };

  ngOnInit(): void {

  }

  ngAfterViewInit() {

    // canvasを取得
    this.context = this.ref.nativeElement.getContext('2d');

    // チャートの作成
    this.chart = new Chart(this.context, {
      type: 'doughnut',     // とりあえず doughnutチャートを表示
      data: this.data,      // データをプロパティとして渡す
      options: this.options // オプションをプロパティとして渡す
    })

  }
}
