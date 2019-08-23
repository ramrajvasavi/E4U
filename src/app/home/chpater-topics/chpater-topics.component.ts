import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CategoryService } from '../../shared/category.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

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
  private route: Router,
  private http: HttpClient) { }

  ngOnInit() {
    const topics = environment.topics;
    let chapterVal: any = this.catServ.getSelectedChapter();
    chapterVal = chapterVal.split(' ').join('_');
    this.topicValue = this.catServ.getSelectedTopic();
    this.http.get('../../../assets/'+ chapterVal +'.json')
    .subscribe(data => {
      const chapterTopics = data[this.topicValue];
      this.topicValue = this.topicValue.split('_').join(' ');
      let lists = chapterTopics;
      if(lists !== undefined) {
        lists.forEach(list => {
          list['isOpen'] = false;
        });
        this.topicsList = lists;
      } else {
        this.topicsList = [];
      }
    });
    
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
