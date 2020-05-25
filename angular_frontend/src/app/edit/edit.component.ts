import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StudentsService } from '../students.service';
import { Students} from  '../students';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private _studentsService : StudentsService, 
    private router: Router,
    private routes: ActivatedRoute
    ) { }

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;
    this._studentsService.getByid(routeParams.id)
    .subscribe((data: any) => {
      // console.log(data)
      this.addForm.patchValue(data);
      
      
   });

    this.addForm = this.formBuilder.group({
      sId: [''],
      fName: ['', Validators.required],
      lName: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.maxLength(30)]]
    });

    
        
 }
 update(){
   this._studentsService.updateStudent(this.addForm.value).subscribe(() => {
     this.router.navigate(['view']);
   },
   error => {
     alert(error);
   });
   
 }

}
