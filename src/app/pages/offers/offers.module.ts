import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import { AddofferComponent } from './addoffer/addoffer.component';
import { EditofferComponent } from './editoffer/editoffer.component';
import { DeleteofferComponent } from './deleteoffer/deleteoffer.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AddofferComponent,
    DeleteofferComponent,
    EditofferComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [

    AddofferComponent,
    DeleteofferComponent,
    EditofferComponent
  ]
})
export class OffersModule {
}
