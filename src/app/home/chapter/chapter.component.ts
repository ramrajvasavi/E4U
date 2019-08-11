import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CategoryService } from '../../shared/category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit {
  chapterList = [];
  chapter = '';
  constructor(private catServ: CategoryService,
  private route: Router ) { }

  ngOnInit() {
    const chapters = environment.chapters;
    this.chapter = this.catServ.getSelectedChapter();
    this.chapterList = chapters[this.catServ.getSelectedChapter()];
  }
  selTopic(evtObt){
    this.catServ.setSelectedTopic(evtObt.target.innerText);
    this.route.navigate(['/home/topic']);
  }
}
