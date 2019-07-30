import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-code',
  template: `
  <code>{{code}}</code>
  <pre>data = {{getJson()}}</pre>
  `,
  styles: [`
  code {
    color: #3344cc;
    display: block;
  }
  pre {
    color: #339944;
  }
  `]
})
export class AppShowCode {
  @Input() data: string;
  @Input() code: string;

  getJson() {
    return (JSON.stringify(this.data, undefined, 2));
  }
}
