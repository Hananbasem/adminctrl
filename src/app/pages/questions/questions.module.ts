import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditanswerComponent } from './editanswer/editanswer.component';
import { AddanswerComponent } from './addanswer/addanswer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import {SharedModule} from 'src/app/shared/shared.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    AddanswerComponent,
    EditanswerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports:[
    AddanswerComponent,
    EditanswerComponent
  ]

})

export class QuestionsModule { }
