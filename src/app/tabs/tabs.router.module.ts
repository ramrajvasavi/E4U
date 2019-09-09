import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'category',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../category/category.module').then(m => m.CategoryModule)
          }
        ]
      },
      {
        path: 'subcategory',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sub-category/sub-category.module').then(m => m.SubCategoryModule)
          }
        ]
      },
      {
        path: 'chapter',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../chapter/chapter.module').then(m => m.ChapterModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/category',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/category',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
