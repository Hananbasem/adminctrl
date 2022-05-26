import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { WorksService } from 'src/app/services/works.service';
import { tap } from 'rxjs';
import { work } from '../work';

@Component({
  selector: 'app-work',
  templateUrl: './addwork.component.html',
  styleUrls: ['./addwork.component.css']
})
export class AddworkComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    discreption: new FormControl(''),
    image: new FormControl(''),
    id: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddworkComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                id: number,
                name: string,
                description: number,
                image: string
              },private worksService:WorksService) {

  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

  saveWork() {
    // call add api
    this.worksService.addwork(this.getWorkFromForm()).pipe(
      tap (res => { this.worksService.getworks();},
         err =>{}
           
      )
    )
  }


  getWorkFromForm () :work {
    throw new work (
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
