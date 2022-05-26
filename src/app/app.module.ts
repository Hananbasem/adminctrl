import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {NopageFoundComponent} from './nopage-found/nopage-found.component';
import {PagesModule} from './pages/pages.module';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import {SharedModule} from './shared/shared.module';
import {ProductsModule} from './pages/products/products.module';
import {MatDialogModule} from "@angular/material/dialog";
import { OffersModule } from './pages/offers/offers.module';
import { WorksModule } from './pages/works/works.module';
import { QuestionsModule } from './pages/questions/questions.module';
import { UsersModule } from './pages/users/users.module';


@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    PagesModule,
    SharedModule,
    AppRoutingModule,
    ProductsModule,
    OffersModule,
    WorksModule,
    QuestionsModule,
    HttpClientModule,
    MatDialogModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
