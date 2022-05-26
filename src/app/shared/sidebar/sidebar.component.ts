import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { QuestionsComponent } from 'src/app/pages/questions/questions.component';
import {SidebarService} from 'src/app/services/sidebar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems?: any[];
  prodItems?: any[];

  constructor(private sidebarservices: SidebarService, private router: Router) {
    this.menuItems = this.sidebarservices.menu;
    console.log(this.menuItems);

    this.prodItems = this.sidebarservices.prodmenu;
    console.log(this.prodItems);

  }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigateByUrl('/login');
  }
gotoques(){
  this.router.navigateByUrl('/dashboard/questions');
}
gotores (){
  this.router.navigateByUrl('/dashboard/reservation');
}
gotous (){
  this.router.navigateByUrl('/dashboard/users');
}
}



