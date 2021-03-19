import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {

  public students: any = []

  constructor(private _studentsService: StudentsService) { }

  ngOnInit(): void {

    this._studentsService.getStudents().subscribe(students=>{this.students = students});

  }

}
