import { StyleGuideComponent } from './style-guide/style-guide.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';


export const appRoutes: Routes = [
  {
    path: '',
    component: ManageComponent
  },
  {
    path: 'styles',
    component: StyleGuideComponent
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
