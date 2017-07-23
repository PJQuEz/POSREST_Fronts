import { StyleGuideComponent } from './style-guide/style-guide.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { ListMenuComponent } from './list-menu/list-menu.component';


export const appRoutes: Routes = [
  {
    path: '',
    component: ManageMenuComponent
  },
  {
    path: 'styles',
    component: StyleGuideComponent
  },
  {
    path: 'list',
    component: ListMenuComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
