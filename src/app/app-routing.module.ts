import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {NopageFoundComponent} from './nopage-found/nopage-found.component';
import {PagesRoutingModule} from './pages/pages-routing.module';


const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NopageFoundComponent}

]

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
