import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductsComponent} from './products/products.component';
import {OffersComponent} from './offers/offers.component';
import {ReservationComponent} from './reservation/reservation.component';
import {WorksComponent} from './works/works.component';
import { QuestionsComponent } from './questions/questions.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [

  {
  
    path: 'dashboard', component: PagesComponent,
    children: [

      {path: '', component: DashboardComponent},
      {path:'questions',component:QuestionsComponent},
      {path:'users',component:UsersComponent},
      {path: 'offers', component: OffersComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'reservation', component: ReservationComponent},
      {path: 'works', component: WorksComponent},

    ],
    
  }
]


@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
