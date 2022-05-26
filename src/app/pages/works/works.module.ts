import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddworkComponent } from './addwork/addwork.component';
import { EditworkComponent } from './editwork/editwork.component';
import { DeleteworkComponent } from './deletework/deletework.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AddworkComponent,
    EditworkComponent,
    DeleteworkComponent
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
  AddworkComponent,
  EditworkComponent,
  DeleteworkComponent
  ]
})
export class WorksModule { }
