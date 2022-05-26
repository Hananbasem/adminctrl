import { Component,Inject, OnInit } from '@angular/core';
import { offer} from '../offer';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef} from "@angular/material/dialog";
import { OffersService } from 'src/app/services/offers.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.component.html',
  styleUrls: ['./editoffer.component.css']
})
export class EditofferComponent implements OnInit {

   
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    id: new FormControl(''),
  });




  constructor(private formBuilder:FormBuilder, public dialogRef:MatDialogRef<EditofferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number,
      name: string,
      description: string,
      image: string  },private offerService:OffersService) { 

    }
    

get f() {
  return this.form.controls;
}

submit() {
  console.log(this.form.value);
}


saveOffer() {
this.offerService.editoffer(this.getOfferFromForm()).pipe(
  tap(
    res=>{this.offerService.getoffers()},
    err=>{}
  )
)
}

getOfferFromForm():offer {
  throw new offer (
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
  


