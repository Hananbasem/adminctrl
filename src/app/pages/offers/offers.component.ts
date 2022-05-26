import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { OffersService } from 'src/app/services/offers.service';
import { offer } from './offer';
import { AddofferComponent } from './addoffer/addoffer.component';
import { EditofferComponent } from './editoffer/editoffer.component';
import { DeleteofferComponent } from './deleteoffer/deleteoffer.component';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
offers !: offer[];
offertest: offer[]=[

  {
    id:25,
    name:'عرض العروس',
    description:'حسم على كافة المنتجات وجلسات الليزر بمناسبة عيد الأم',
    image:'./assets/dist/img/o1.jpg', 
  },
  {
    id:25,
    name:'عرض عيد الأم',
    description:'حسم على كافة المنتجات وجلسات الليزر بمناسبة عيد الأم',
    image:'./assets/dist/img/o2.jpg', 
  },
  
  {
    id:25,
    name:'عرض عيد الأم',
    description:'حسم على كافة المنتجات وجلسات الليزر بمناسبة عيد الأم',
    image:'./assets/dist/img/o3.jpg', 
  },
  
  {
    id:25,
    name:'عرض عيد الأم',
    description:'حسم على كافة المنتجات وجلسات الليزر بمناسبة عيد الأم',
    image:'./assets/dist/img/o4.jpg', 
  },
  
  {
    id:25,
    name:'عرض عيد الأم',
    description:'حسم على كافة المنتجات وجلسات الليزر بمناسبة عيد الأم',
    image:'./assets/dist/img/o5.jpg', 
  },
];
  constructor(private offerservice:OffersService,private dialog:MatDialog) {
  }

  ngOnInit(){
    this.getoffers();
  }
public getoffers ():
void{
  this.offerservice.getoffers().subscribe(
    (response:offer[]) =>{
      this.offers=response;
      console.log(this.offers);
    },
    (error:HttpErrorResponse) =>{
      alert(error.message);
    }
  );
}

//open addproduct ui
openAddOfferDialog() {
  this.dialog.open(AddofferComponent, {
    height: '500px',
    width: '600px',
  });
}
//--------------------------------------------------

//open editproduct ui
editOffer(param: offer) {
  this.dialog.open(EditofferComponent, {
    height: '500px',
    width: '600px',
    data: param
  });
}

//----------------------------------------------------
//open delteproduct ui

deleteOffer(id: number) {
  this.offerservice.deleteoffer(id).pipe(
    tap (res => { this.offerservice.getoffers()},
    err => {}

    )
  )
}


}




