import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
  <p>
    You are welcome here, {{data.name}}!
    How are things in {{data.city}}?
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
export class AppWelcome {
  @Input() data: any;
}
