import { Component, OnInit } from '@angular/core';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { CategoryService } from '../shared/category.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categoryList = [];
  constructor(public route: Router,
    private catServ: CategoryService) {}
  ngOnInit(){
    this.categoryList = environment.categoryList;
    localStorage.setItem('isBackBtn', 'no');
  }

  navSubcategory(evt){
   this.catServ.setSelectedSubCat(evt.target.innerText);
    this.route.navigate(['/home/subcategory']);
  }
}
