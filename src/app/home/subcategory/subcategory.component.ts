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
    this.subCat = this.catServ.getSelectedSubCat();
    this.subCategoryList = subCat[this.catServ.getSelectedSubCat()];
  }
  chapter(evtObt){
    this.catServ.setSelectedChapter(evtObt.target.innerText);
    this.route.navigate(['/home/chapter']);
  }

}