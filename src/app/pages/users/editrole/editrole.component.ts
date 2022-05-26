import { Component, OnInit,Inject } from '@angular/core';
import { user } from '../user';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import {rol} from '../rol';




@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.css']
})

export class EditroleComponent implements OnInit {
roles: rol[]=[
  {id:"1",name:"admin"},
  {id:"2",name:"doctor"},
  {id:"3",name:"secretary"},
  {id:"4",name:"user"}
];

  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
     lastName: new FormControl(''),
    Job: new FormControl(''),
    gender:new FormControl(''),
    mobile:new FormControl(''),
    role:new FormControl(''),
    id: new FormControl(''),
  });


  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<EditroleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      firstName:string,
      lastName:string,
      job:string,
      gender:string,
      mobile:string,
      role:string
    },private usersService:UsersService) {

    
}


submit() {
  console.log(this.form.value);
}

save() {
this.usersService.edituser(this.getUserFromForm())
.subscribe(
  (Response) =>{ this.usersService.getusers()}
)
}

getUserFromForm():user{
  throw new user(
    this.form.value.id,
    this.form.value.firstName,
    this.form.value.lastName,
    this.form.value.gender,
    this.form.value.job,
    this.form.value.mobile,
    this.form.value.role,

  );
}

ngOnInit(): void {
  this.form = this.formBuilder.group({
    firstName: ['', Validators.required],
    LastName: ['', Validators.required],
    gender: ['', Validators.required],
    job:['',Validators.required],
    mobile:['',Validators.required],
    id: ['']
  });
  this.form.setValue(this.data);
}
}




