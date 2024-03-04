import { Component, NgZone, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  template: `
    <h1>Hello !</h1>
    <button (click)="downloadCsv()">Download Selected Colors</button>
  <app-child [colors]="colors" (download)="download($event)"> </app-child>

  `,
})
export class App {
  zone = inject(NgZone);
  [x: string]: any;
  csvFile = [];
  name = 'Angular';
  colors = [
    { id: 1, value: 'red' },
    { id: 2, value: 'green' },
    { id: 3, value: 'blue' },
    { id: 4, value: 'pink' },
    { id: 5, value: 'yellow' },
  ];

  download(data: any) {
    console.log({ data });
    this.csvFile = data;
  }

  downloadCsv() {
    if (this.csvFile.length === 0) {
      console.error('No ids.');
      return;
    }
    const idsParam = this.csvFile.join('&colorId=');
    const url = `https://localhost:8000/api/v1/files/color.csv?colorId=${idsParam}`;
    window.open(url, '_blank');
    this.csvFile = [];
  }
}

bootstrapApplication(App);
