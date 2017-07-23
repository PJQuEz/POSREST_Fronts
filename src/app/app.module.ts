import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { DndModule } from 'ng2-dnd';

import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { AppConfig } from './app.config';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputDialogComponent } from './dialog/input-dialog/input-dialog.component';

import { ManageComponent } from './manage/manage.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { ListComponent } from './list/list.component';
import { ListMenuComponent } from './list-menu/list-menu.component';

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => localStorage.getItem('id_token') || ''),
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputDialogComponent,
    ManageComponent,
    StyleGuideComponent,
    SideNavComponent,
    ManageMenuComponent,
    ListComponent,
    ListMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    DndModule.forRoot()
  ],
  providers: [
    {
      provide: 'AppConfig',
      useValue: AppConfig
    },
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http, RequestOptions]
    }],
  entryComponents: [
    InputDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
