import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import {AddproductComponent} from './addproduct/addproduct.component';
import {DeleteproductComponent} from './deleteproduct/deleteproduct.component';
import {EditproductComponent} from './editproduct/editproduct.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AddproductComponent,
    DeleteproductComponent,
    EditproductComponent
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

    AddproductComponent,
    DeleteproductComponent,
    EditproductComponent
  ]
})
export class ProductsModule {
}
