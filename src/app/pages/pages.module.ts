import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReservationComponent} from './reservation/reservation.component';
import {OffersComponent} from './offers/offers.component';
import {ProductsComponent} from './products/products.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {WorksComponent} from './works/works.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from './questions/questions.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [

    PagesComponent,
    DashboardComponent,
    OffersComponent,
    ProductsComponent,
    ReservationComponent,
    WorksComponent,
    QuestionsComponent,
    UsersComponent,
 ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    OffersComponent,
    ProductsComponent,
    ReservationComponent,
    WorksComponent,
    QuestionsComponent,
    UsersComponent

  ]
})
export class PagesModule {
}
