import {Component} from 'angular2/core';

import {CoursesComponent} from './courses.component';
import {ProfessorsComponent} from './professors.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>Welcome</h1>
      <courses></courses>
      <professors></professors>
      `,
    directives: [
      CoursesComponent,
      ProfessorsComponent
    ]
})
export class AppComponent { }
