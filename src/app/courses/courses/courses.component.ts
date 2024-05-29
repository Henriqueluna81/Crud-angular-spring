import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  course: any[] = [
    {_id: "1", name: "Angular", category: "Front-end"},
    {_id: "2", name: "Spring", category: "Back-end"},
    {_id: "3", name: "MySQL", category: "Banco de dados"}
  ];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {
  }

}
