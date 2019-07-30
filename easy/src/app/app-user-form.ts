import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-form',
  template: `
  <h2>{{data.title}}</h2>

  <form (submit)="onSubmit()">
    <div *ngFor="let label of data.labels; let i=index">
      <label class="label" [style.width]="label.width">
        {{label.text}}
        <input [(ngModel)]="data.fields[i]" class="field" type="text" [ngModelOptions]="{standalone: true}" />
      </label>
    </div>

    <input class="submit" type="submit" value="Submit" />
  </form>
  
  `,
  styles: [`
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    color: #777;
    margin-bottom: 10px;
  }
  form {
    width: 300px;
    border: 1px solid #ccc;
  }
  .label {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 14px;
    margin: 10px;
    padding: 0;
    display: inline-block;
  }
  .field {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 3px 5px 0 5px;
  }
  .submit {
    margin: 20px 0 20px 138px;
  }
  `]
})
export class AppUserForm {
  @Input() data: any;

  onSubmit() {
    console.log("onSubmit");
    console.log("name="+this.data.fields[0]);
    console.log("city="+this.data.fields[1]);
  }
}
