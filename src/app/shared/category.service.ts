import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 private selSubCat = '';
 private selChapter = '';
 private topic = '';
 
  constructor() { }

  setSelectedSubCat(subCat){
    this.selSubCat = subCat;
  }
  getSelectedSubCat(){
    return this.selSubCat;
  }
  setSelectedChapter(chap){
    this.selChapter = chap;
  }
  getSelectedChapter(){
    return this.selChapter;
  }

  setSelectedTopic(topic){
    this.topic = topic;
  }
  getSelectedTopic(){
    return this.topic;
  }

}
