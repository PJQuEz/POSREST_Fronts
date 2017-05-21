import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputDialogComponent } from './dialog/input-dialog/input-dialog.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputDialogComponent,
    StyleGuideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [
    InputDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
