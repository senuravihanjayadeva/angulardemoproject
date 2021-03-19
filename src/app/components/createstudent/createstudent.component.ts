import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.scss']
})
export class CreatestudentComponent implements OnInit {

  public student:Student = new Student();

  constructor(private _studentService: StudentsService,private _router: Router) { }

  ngOnInit(): void {
  }

  saveStudent(){
    console.log(this.student);
    this._studentService.saveStudent(this.student).subscribe(resStudent=>{
      if(resStudent){
        this._router.navigateByUrl("/students")
      }
    })
  }


}
