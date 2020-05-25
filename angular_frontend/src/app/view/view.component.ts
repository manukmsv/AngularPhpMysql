import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
students: Students[];
_id : any;
  
  constructor(private _studentsService : StudentsService,
              private router: Router) { }

  ngOnInit() {

    this._studentsService.getStudent().subscribe((data: Students[]) =>{
      this.students = data;
      console.log(this.students);  
    });
  }

  delete(students: Students): void{
    this._studentsService.deleteStudent(students.sId).subscribe(data => {
      this.students =this.students.filter(u => u !== students);
    });
  }

  edit(students: Students){
    this._id = students.sId;
    this.router.navigate(['edit/' + this._id]);
   
  }

}
