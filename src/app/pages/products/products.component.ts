import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductsService} from 'src/app/services/products.service';
import {product} from './product';
import {AddproductComponent} from "./addproduct/addproduct.component";
import {MatDialog} from "@angular/material/dialog";
import { EditproductComponent } from './editproduct/editproduct.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products!:product[];
  producttest: product[] = [
    {
      id: 13,
      name: 'clean&clear',
      price: 50000,
      image: './assets/dist/img/p1.jpg',
      description:'غسول يومي ينظف ويرطب الوجه',
    },
    {

      id: 13,
      name: 'bioderma',
      price: 50000,
      image: './assets/dist/img/p2.jpg',
      description:'غسول يومي ينظف ويرطب الوجه',
    },
    {

      id: 13,
      name: 'bioderma',
      price: 50000,
      image: './assets/dist/img/p3.jpg',
      description:'غسول يومي ينظف ويرطب الوجه',
        },
    {

      id: 13,
      name: 'bioderma',
      price: 50000,
      image: './assets/dist/img/p4.jpg',
      description:'غسول يومي ينظف ويرطب الوجه',
        },
    {

      id: 13,
      name: 'bioderma',
      price: 50000,
      image: './assets/dist/img/p5.jpg',
      description:'غسول يومي ينظف ويرطب الوجه',
        },

    {

      id: 13,
      name: 'bioderma',
      price: 50000,
      image: './assets/dist/img/p6.jpg',
      description:'غسول يومي ينظف ويرطب الوجه' 
       },

  ];


  constructor(private router: Router, private productsService: ProductsService, private dialog: MatDialog) {
  }

  ngOnInit() {
   this.getproducts();
        
    
  }
  getproducts(){
    this.productsService.getproducts()
    .subscribe(
      (data) =>{this.products=data});
  }


  
  

//open addproduct ui
openAddProductDialog() {
  
  const dialogRef = this.dialog.open(AddproductComponent, {
    height: '500px',
    width: '600px',
  });
}
//--------------------------------------------------

//open editproduct ui
  editProduct(param: product) {
   const dialogRef= this.dialog.open(EditproductComponent, {
      height: '500px',
      width: '600px',
      data: param
    });
  }

  //----------------------------------------------------
//open delteproduct ui

  deleteProduct(id: number) {
    this.productsService.deleteproduct(id)
    .subscribe((Response)=>{this.productsService.getproducts()});
  }


}



