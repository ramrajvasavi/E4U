import { Component } from '@angular/core';
import { Events } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { CategoryService } from '../shared/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: 'sub-category.page.html',
  styleUrls: ['sub-category.page.scss']
})
export class SubCategory {
  subCategoryList = [];
  subCat = '';
   constructor( private catServ: CategoryService,
     private route: Router, private events: Events) { }
     ionViewWillEnter() {
      const subCat = environment.subCategory;
      /* if(localStorage.getItem('isBackBtn') !== undefined && localStorage.getItem('isBackBtn') !== null){
        if(localStorage.getItem('isBackBtn') == 'yes') {
        this.subCat = localStorage.getItem('pageValue');
        localStorage.setItem('isBackBtn', 'no');
        this.subCategoryList = subCat[this.subCat];
        } else {
          this.subCat = this.catServ.getSelectedSubCat();
          this.subCategoryList = subCat[this.catServ.getSelectedSubCat()];
        }
      } else { */
        this.subCat = this.catServ.getSelectedSubCat();
        this.subCategoryList = subCat[this.catServ.getSelectedSubCat()];
     // }
    }
 
   ngOnInit() {
     /* const subCat = environment.subCategory;
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
     }*/
   }
     chapter(evtObt){
     this.catServ.setSelectedChapter(evtObt.target.innerText);
     this.route.navigate(['/tabs/chapter']);
   }
   goBack(){
     localStorage.setItem('pageValue', this.subCat);
     localStorage.setItem('isBackBtn', 'no');
     this.route.navigate(['/tabs']);
   }
 }
