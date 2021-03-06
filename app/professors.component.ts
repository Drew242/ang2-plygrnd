import {Component} from 'angular2/core';
import {ProfessorService} from './professors.service';

@Component({
  selector: 'professors',
  template: `
    <h2>Fall 2016</h2>
      <p>{{ title }}</p>
    <ul>
      <li *ngFor="#professor of professors">
        {{ professor }}
      </li>
    </ul>
  `,
  providers: [ProfessorService]
})

export class ProfessorsComponent {
  title      = "Professors";
  professors = [];

  constructor(professorService: ProfessorService) {
    this.professors = professorService.getProfessors();
  }
}
