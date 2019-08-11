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
  topicsList = [];
  ngOnInit() {
    const topics = environment.topics;
    this.topicsList = topics[this.catServ.getSelectedChapter()];
  }
  urlLink(link){
    return this.domSan.bypassSecurityTrustResourceUrl(link);
  }

}
