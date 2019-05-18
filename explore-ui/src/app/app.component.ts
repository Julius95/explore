import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'test'
  constructor() {
    this.changeName('Julius')
  }

  changeName(name:string):void{
    this.name = name
  }
}
