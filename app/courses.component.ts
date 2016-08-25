import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
  selector: 'courses',
  template: `
    <h2>Fall 2016</h2>
      <p>{{title }}</p>
      <input type="text" autoGrow />
    <ul>
      <li *ngFor="#course of courses">
        {{ course }}
      </li>
    </ul>
    `,
   providers: [CourseService],
   directives: [AutoGrowDirective]
})

export class CoursesComponent {
  title   = "Course Catalog";
  courses = [];

  constructor(courseService: CourseService){
    this.courses = courseService.getCourses();
  }
}
