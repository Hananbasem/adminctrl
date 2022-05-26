import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { work } from './work';
import {HttpErrorResponse} from '@angular/common/http';
import { EditworkComponent } from './editwork/editwork.component';
import { AddworkComponent } from './addwork/addwork.component';
import { Router } from '@angular/router';
import { WorksService } from 'src/app/services/works.service';
import { tap } from 'rxjs';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
works !: work[];
worktest: work[]=[


{
  id:35,
  name:'بوتوكس حول العين',
  description:'حالة بوتكس للتجاعيد حول العين قبل وبعد الجلسات',
  image:'./assets/dist/img/w1.jpg',
},
{
  id:35,
  name:'بوتوكس جبهة',
  description:'حالة بوتكس للجبهة قبل وبعد الجلسات',
  image:'./assets/dist/img/w2.jpg',
},
{
  id:35,
  name:'بروفايلو',
  description:'قبل وبعد العلاج',
  image:'./assets/dist/img/w3.jpg',
},


{
  id:35,
  name:'بوتوكس جبهة',
  description:'حالة بوتكس للجبهة قبل وبعد الجلسات',
  image:'./assets/dist/img/w5.jpg',
},


{
  id:35,
  name:'بوتوكس جبهة',
  description:'حالة بوتكس للجبهة قبل وبعد الجلسات',
  image:'./assets/dist/img/w4.jpg',
}

];


  constructor( private router:Router,private worksService: WorksService,private dialog:MatDialog) {
  }

  
  ngOnInit(){
    this.getworks();
  }
public getworks ():
void{
  this.worksService.getworks().subscribe(
    (response:work[]) =>{
      this.works=response;
      console.log(this.works);
    },
    (error:HttpErrorResponse) =>{
      alert(error.message);
    }
  );
}

//open addwork ui
openAddWorkDialog() {
  this.dialog.open(AddworkComponent, {
    height: '500px',
    width: '600px',
  });
}
//--------------------------------------------------

//open editwork ui
editWork(param: work) {
  this.dialog.open(EditworkComponent, {
    height: '500px',
    width: '600px',
    data: param
  });
}

//----------------------------------------------------
//open deltework ui

deleteWork(id: number) {
  this.worksService.deletework(id).pipe(
    tap (
      res => { this.worksService.getworks()},
      err => {}
    )
  )
}


}





