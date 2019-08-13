import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CategoryService } from '../../shared/category.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router'; 
import { Http } from '@angular/http';

@Component({
  selector: 'app-chpater-topics',
  templateUrl: './chpater-topics.component.html',
  styleUrls: ['./chpater-topics.component.scss'],
})
export class ChpaterTopicsComponent implements OnInit {
 topicValue: any = '';
 topicsList: any = [];
  constructor(private catServ: CategoryService,
  private domSan: DomSanitizer,
  private route: Router) { }

  ngOnInit() {
    const topics = environment.topics;
    this.topicValue = this.catServ.getSelectedChapter();
    this.topicValue = this.topicValue.split('_').join(' ');
    let lists = topics[this.catServ.getSelectedChapter()];
    if(lists !== undefined) {
      lists.forEach(list => {
        list['isOpen'] = false;
      });
      this.topicsList = lists;
    } else {
      this.topicsList = [];
    }
  }
  urlLink(link){
    return this.domSan.bypassSecurityTrustResourceUrl(link);
  }
  toggleOpen(iVal){
    this.topicsList.forEach((list, i) => {
      if(i == iVal){
        list.isOpen = true;
      } else {
        list.isOpen = false;
      }
    });
  }
  goBack(){
    localStorage.setItem('pageValue', this.topicValue);
    localStorage.setItem('isBackBtn', 'yes');
    this.route.navigate(['/home/chapter']);
  }
}
