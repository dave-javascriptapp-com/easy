import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="box"></div>
  <h1>{{data.title}}</h1>
  `,
  styles: [`
  .box {
    display: inline-block;
    width: 18px;
    height: 18px;
    background: #cc3344;
    margin-right: 5px;
  }
  h1 {
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    color: #000;
  }
  `]
})
export class AppHeader {
  @Input() data: any;
}

