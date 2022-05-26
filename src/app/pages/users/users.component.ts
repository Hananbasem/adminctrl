import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { EditroleComponent } from './editrole/editrole.component';
import { user} from './user';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
users !: user[];
userstest: user[]=[
  {
    id:17,
    firstName:'hanan',
    lastName:'magribi',
    mobile:'0950027726',
    gender:'female',
    job:'eng',  
    role:'doctor'
  },
  
  
  {
    id:17,
    firstName:'حنان',
    lastName:'المغربي',
    mobile:'098765',
    gender:'أنثى',
    job:'مهندسة',  
    role:'secretary'

  },
  

  {
    id:17,
    firstName:'hanan',
    lastName:'magribi',
    mobile:'0987654',
    gender:'female',
    job:'eng',  
    role:'admin'

  },
  

];
 
constructor(private router:Router, private usersService: UsersService,private dialog:MatDialog) {

}

ngOnInit(){
  this.getusers();
}

getusers(){
  this.usersService.getusers()
  .subscribe(
    (data) =>{this.users=data});
  
}



//open editproduct ui
editrole(param: user) {
  const dialogRef= this.dialog.open(EditroleComponent, {
     height: '500px',
     width: '600px',
     data: param
   });
 }

deleteuser(id:number){
  this.usersService.deleteuser(id).subscribe(
    (response)=> {this.usersService.getusers()}
  );
}

}
