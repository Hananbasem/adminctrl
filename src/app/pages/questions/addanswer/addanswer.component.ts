import { Component, OnInit,Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { QuestionsService } from 'src/app/services/questions.service';
import { question } from '../question';

@Component({
  selector: 'app-addanswer',
  templateUrl: './addanswer.component.html',
  styleUrls: ['./addanswer.component.css']
})
export class AddanswerComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    questionText: new FormControl(''),
    answer: new FormControl(''),
    common: new FormControl(''),
    id: new FormControl(''),
  });

  constructor(private formBuilder:FormBuilder,public dialogRef:MatDialogRef<AddanswerComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number,
      questionText: string,
      answer: string,
      common: boolean
    },  private quesServise: QuestionsService) {

}

submit(){
  console.log(this.form.value);
}

saveAnswer(){
  this.quesServise.sendAnswer(this.getFromForm())
  .subscribe((Response)=>{this.quesServise.getquestions()})
}



getFromForm(): question {
  throw new question(
    this.form.value.id,
    this.form.value.quetionText,
    this.form.value.answer,
    this.form.value.common,
  
  );
}


ngOnInit(): void {
  this.form = this.formBuilder.group({
    questionText: ['', Validators.required],
    answer: ['', Validators.required],
    common: ['', Validators.required],
    id: ['']
  });
  this.form.setValue(this.data);
}
}

