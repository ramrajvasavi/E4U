import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CategoryService } from '../../shared/category.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
  chapterList = [];
  chapter: any = '';
  chapterTopics = [];
  constructor(private catServ: CategoryService,
  private route: Router,
  private http: HttpClient ) { }

  ngOnInit() {
   // const chapters = environment.chapters;
    if(localStorage.getItem('isBackBtn') !== undefined && localStorage.getItem('isBackBtn') !== null){
      if(localStorage.getItem('isBackBtn') == 'yes') {
      this.chapter = localStorage.getItem('pageValue');
      localStorage.setItem('isBackBtn', 'no');
    //  this.chapterList = chapters[this.chapter];
      } else {
        this.chapter = this.catServ.getSelectedChapter();
       // this.chapterList = chapters[this.catServ.getSelectedChapter()];
      }
    } else {
      this.chapter = this.catServ.getSelectedChapter();
     // this.chapterList = chapters[this.catServ.getSelectedChapter()];
    }
    const chapterVal = this.chapter.split(' ').join('_');
    this.http.get('../../../assets/'+ chapterVal +'.json')
    .subscribe(data => {
      this.chapterTopics = data;
      this.chapterList = Object.keys(data);
    });
  }
  selTopic(evtObt){
    this.catServ.setSelectedTopic(evtObt.target.innerText);
    this.route.navigate(['/home/topic']);
  }
  goBack(){
    localStorage.setItem('pageValue', this.chapter);
    localStorage.setItem('isBackBtn', 'yes');
    this.route.navigate(['/home/subcategory']);
  }
}
