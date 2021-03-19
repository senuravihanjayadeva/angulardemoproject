import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseUrl: string = "https://springbootsenu.herokuapp.com/students"


  constructor(private _httpClient: HttpClient) { }

  getStudents(){
   return this._httpClient.get(this.baseUrl)
  }
}
