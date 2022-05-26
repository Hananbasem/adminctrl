import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { tap } from 'rxjs';
import { OffersService } from 'src/app/services/offers.service';
import { ProductsService } from 'src/app/services/products.service';
import { offer } from '../offer';


@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    discreption: new FormControl(''),
    image: new FormControl(''),
    id: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddofferComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                id: number,
                name: string,
                description: number,
                image: string
              },private offersService:OffersService) {

  }


  submit() {
    console.log(this.form.value);
  }

  saveOffer() {
    // call add api
    this.offersService.addoffer(this.getOfferFromForm()).pipe(
    tap (res =>{
    this.offersService.getoffers();

     }, err=> {
     
     })
)

  }

  
  getOfferFromForm(): offer {
    throw new offer(
      this.form.value.id,
      this.form.value.name,
      this.form.value.description,
      this.form.value.image
    );
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      id: ['']
    });
    this.form.setValue(this.data);
  }
}
