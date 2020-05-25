import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Students} from  './students';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url: string = 'http://localhost/study_php/angular_php_mysql_app/php_backend';

  constructor(private http: HttpClient) { }
  
  getStudent(){
    return this.http.get<Students[]>(this.url + '/list.php');
  }

  deleteStudent(id:number){
    return this.http.delete<Students[]>(this.url + '/delete.php?id=' + id);
  }

  createStudent(student: Students){
    return this.http.post(this.url + '/insert.php', student);
  }

  getByid(id:number){
    return this.http.get<Students[]>(this.url + '/getByid.php?id=' + id);
  }

  updateStudent(student: Students){
    return this.http.put(this.url + '/update.php' + '?id='+ student.sId, student);
  }
  }

 
