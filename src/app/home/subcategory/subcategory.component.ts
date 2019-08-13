import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CategoryService } from '../../shared/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
})
export class SubcategoryComponent implements OnInit {
 subCategoryList = [];
 subCat = '';
  constructor( private catServ: CategoryService,
    private route: Router ) { }

  ngOnInit() {
    const subCat = environment.subCategory;
    if(localStorage.getItem('isBackBtn') !== undefined && localStorage.getItem('isBackBtn') !== null){
      if(localStorage.getItem('isBackBtn') == 'yes') {
      this.subCat = localStorage.getItem('pageValue');
      localStorage.setItem('isBackBtn', 'no');
      this.subCategoryList = subCat[this.subCat];
      } else {
        this.subCat = this.catServ.getSelectedSubCat();
        this.subCategoryList = subCat[this.catServ.getSelectedSubCat()];
      }
    } else {
      this.subCat = this.catServ.getSelectedSubCat();
      this.subCategoryList = subCat[this.catServ.getSelectedSubCat()];
    }
  }
  chapter(evtObt){
    this.catServ.setSelectedChapter(evtObt.target.innerText);
    this.route.navigate(['/home/chapter']);
  }
  goBack(){
    localStorage.setItem('pageValue', this.subCat);
    localStorage.setItem('isBackBtn', 'no');
    this.route.navigate(['/home']);
  }
}