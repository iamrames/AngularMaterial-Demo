import { Component } from '@angular/core';

enum sex {male, female}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  isChecked = true;
  colors = [
    { id: 0, name: 'Select Colors'},
    { id: 1, name: 'Red'},
    { id: 2, name: 'Blue'},
    { id: 3, name: 'Green'},
  ];

  onChange($event) {
    console.log($event);
  }

  onChangeRadio($event) {
    console.log($event);
  }
}
