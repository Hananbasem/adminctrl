import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any [] = [{
    title: 'الرئيسية',
    icon: 'nav icon fas fa-tachomer-alt',
    submenu: [
      {title: 'المنتجات', Url: 'products', icon: 'far fa-circle nav-icon'},
      {title: 'العروض', Url: 'offers', icon: 'far fa-circle nav-icon'},
      {title: 'أعمالنا', Url: 'works', icon: 'far fa-circle nav-icon'},
    
    ]

  }
  ];

  prodmenu: any [] = [{
    title: 'المنتجات',
    icon: 'nav icon fas fa-tachomer-alt',
    submenu: [
      {title: 'إضافة منتج', Url: 'addproduct', icon: 'far fa-circle nav-icon'},
      {title: 'حذف المنتج', Url: 'deleteproduct', icon: 'far fa-circle nav-icon'},
      {title: 'تعديل المنتج', Url: 'editproduct', icon: 'far fa-circle nav-icon'}
    ]
  }
  ];

  constructor() {
  }
}
