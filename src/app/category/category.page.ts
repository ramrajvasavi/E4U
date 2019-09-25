import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category',
  templateUrl: 'category.page.html',
  styleUrls: ['category.page.scss']
})
export class Category {
  categoryList = [];
  constructor(public route: Router,
    private catServ: CategoryService) {}
    ionViewWillEnter() {
      this.categoryList = environment.categoryList;
      localStorage.setItem('isBackBtn', 'no');
    }
  ngOnInit(){
    /* this.categoryList = environment.categoryList;
    localStorage.setItem('isBackBtn', 'no'); */
  }

  navSubcategory(evt){
   this.catServ.setSelectedSubCat(evt.target.innerText);
    this.route.navigate(['/tabs/subcategory']);
  }

}
