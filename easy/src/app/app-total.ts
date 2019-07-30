import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  template: `
  <p>
    Total: {{getTotal()}}
  </p>
  `,
  styles: [`
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #777;
  }
  `]
})
export class AppTotal {
  @Input() data: any;

  getTotal() {
    var i = 0;
    var total = 0;
    for (i=0;i<this.data.length;++i) {
      total += this.data[i];
    }
    return (total);
  }
  
}
