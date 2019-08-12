import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CategoryService } from '../../shared/category.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chpater-topics',
  templateUrl: './chpater-topics.component.html',
  styleUrls: ['./chpater-topics.component.scss'],
})
export class ChpaterTopicsComponent implements OnInit {

  constructor(private catServ: CategoryService,
  private domSan: DomSanitizer ) { }
  topicsList: any = [];
  ngOnInit() {
    const topics = environment.topics;
    let lists = topics[this.catServ.getSelectedChapter()];
    lists.forEach(list => {
      list['isOpen'] = false;
    });
    this.topicsList = lists;
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
}
