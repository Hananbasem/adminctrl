import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { question } from './question';
import { MatDialog } from '@angular/material/dialog';
import { EditanswerComponent } from './editanswer/editanswer.component';
import { AddanswerComponent } from './addanswer/addanswer.component';

declare var st: any;

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
questions!:question[];
q!:question;

questest:question[]=[
  {
    id:1,
    questionText:' هل يمكن التعرض للشمس بعد جلسات تقشير البشرة؟',
    answer:'يجب استخدام واقي شمسي من نوع جيد',
    common:false,
  
  },

  
  {
    id:1,
    questionText:' هل يمكن التعرض للشمس بعد جلسات تقشير البشرة؟',
    answer:'يجب استخدام واقي شمسي من نوع جيد',
    common:false,
  
  },

  {
    id:1,
    questionText:' هل يمكن التعرض للشمس بعد جلسات تقشير البشرة؟',
    answer:'يجب استخدام واقي شمسي من نوع جيد',
    common:false,
  
  },


]

  constructor(private quesService:QuestionsService,private dialog:MatDialog) { }

  ngOnInit() :void{
    this.getquestions();
    new st();
  }
  getquestions(){
    this.quesService.getquestions().subscribe(
      (data)=> {this.questions=data}
    
    );
  }

 /* editanswer(param: question) {
   const dialogRef= this.dialog.open(EditanswerComponent, {
      height: '500px',
      width: '600px',
      data: param
    });
  }
*/
  openAddanswerDialog(ques:question) {
  
    const dialogRef = this.dialog.open(AddanswerComponent, {
      height: '400px',
      width: '500spx',
      data:ques
    });
  }



  
//-------

deleteQuestion(id: number) {
  this.quesService.deletequestion(id)
  .subscribe((Response)=>{this.quesService.getquestions()});
}



}
