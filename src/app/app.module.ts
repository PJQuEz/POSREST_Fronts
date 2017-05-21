import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import {DndModule} from 'ng2-dnd';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputDialogComponent } from './dialog/input-dialog/input-dialog.component';

import { ManageComponent } from './manage/manage.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputDialogComponent,
    ManageComponent,
    StyleGuideComponent
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
  providers: [],
  entryComponents: [
    InputDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
