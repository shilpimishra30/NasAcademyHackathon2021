import { Injectable, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = AppConstants.ApiBaseUrl;

  constructor(private http: HttpClient) { }

  

  addStudent(student: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/addStudent`, student);
  }

  updateStudent(id: number, value: any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/updateStudent`, value);
  }

  deleteStudent(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteStudent/${id}`, {responseType: 'text'});
  }

  getStudentList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllStudents`);
  }
}
