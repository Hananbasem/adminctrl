import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { tap } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { product } from '../product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl(''),
    id: new FormControl(''),
  });


  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<EditproductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number,
      name: string,
      price: number,
      image: string
    },private productService:ProductsService) {

}


submit() {
  console.log(this.form.value);
}

save() {
  // call edit api
this.productService.editproduct(this.getProductFromForm())
.subscribe(
  (Response)=> {this.productService.getproducts()})
}


getProductFromForm(): product {
  throw new product(
    this.form.value.id,
    this.form.value.name,
    this.form.value.price,
    this.form.value.image,
    this.form.value.description
  );
}


ngOnInit(): void {
  this.form = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    image: ['', Validators.required],
    id: ['']
  });
  this.form.setValue(this.data);
}
}



