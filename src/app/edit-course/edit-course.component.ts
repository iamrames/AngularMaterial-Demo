import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

//  export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    console.log('Data', data);
   }

  ngOnInit() {
  }

}
