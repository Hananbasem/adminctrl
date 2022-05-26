import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup,FormControl, FormBuilder ,Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WorksService } from 'src/app/services/works.service';
import { work } from '../work';
import { tap } from 'rxjs';

@Component({
  selector: 'app-editwork',
  templateUrl: './editwork.component.html',
  styleUrls: ['./editwork.component.css']
})
export class EditworkComponent implements OnInit {

  
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    id: new FormControl(''),
  });


  constructor(private formBuilder:FormBuilder, public dialogRef:MatDialogRef<EditworkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number,
      name: string,
      description: string,
      image: string  },private workService:WorksService) { 

    }
    

    submit() {
      console.log(this.form.value);
    }
    
saveWork(){
  //call api
  this.workService.editwork(this.getWorkFromForm()).pipe(
    tap (
      res=>{this.workService.getworks()},
      err=>{}
    )
  )
}

getWorkFromForm ():work{
  throw new work(
    this.form.value.id,
    this.form.value.name,    
    this.form.value.image,
    this.form.value.description
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
