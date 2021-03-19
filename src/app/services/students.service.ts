import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment"
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseUrl: string = environment.hostUrl;


  constructor(private _httpClient: HttpClient) { }

  getStudents(){
   return this._httpClient.get(this.baseUrl + "/students")
  }

  saveStudent(student: Student){
    return this._httpClient.post(this.baseUrl+ "/createstudent",student )
  }
}
