import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HomePage } from './home.page';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { CategoryService } from '../shared/category.service';
import { ChapterComponent } from '../home/chapter/chapter.component';
import { ChpaterTopicsComponent } from '../home/chpater-topics/chpater-topics.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'subcategory',
        component: SubcategoryComponent
      },
      {
        path: 'chapter',
        component: ChapterComponent
      },
      {
        path: 'topic',
        component: ChpaterTopicsComponent
      }
    ])
  ],
  declarations: [
    HomePage, 
    SubcategoryComponent,
    ChapterComponent,
    ChpaterTopicsComponent
  ],
  providers: [ 
    CategoryService
  ]
})
export class HomePageModule {}
