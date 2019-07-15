import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { timer, pipe } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';

enum sex {male, female}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data: { courseId: 1}
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }
  // isLoading = false;

  // constructor() {
  //   this.isLoading = true;
  //   this.getCourses()
  //     .subscribe(x => this.isLoading = false);
  // }

  // getCourses() {
  //   return timer(2000);
  // }

  // progress = 0;
  // timer;

  // constructor() {
  //   this.timer = setInterval(() => {
  //     this.progress++;
  //     if (this.progress === 100) {
  //       clearInterval(this.timer);
  //     }
  //   }, 10);
  // }

  // title = 'material-demo';
  // isChecked = true;
  // colors = [
  //   { id: 0, name: 'Select Colors'},
  //   { id: 1, name: 'Red'},
  //   { id: 2, name: 'Blue'},
  //   { id: 3, name: 'Green'},
  // ];

  // minDate = new Date(2019, 1, 1);
  // maxDate = new Date(2019, 8, 1);

  // categories = [
  //   {name: 'Beginner'},
  //   {name: 'Intermediate'},
  //   {name: 'Advanced'}
  // ];

  // onChange($event) {
  //   console.log($event);
  // }

  // onChangeRadio($event) {
  //   console.log($event);
  // }

  // selectCategory(category) {
  //   this.categories
  //     .filter(c => c !== category)
  //     // tslint:disable-next-line: no-string-literal
  //     .forEach(c => c['selected'] = false);

  //   category.selected = !category.selected;
  // }
}
