import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LotoAppComponent } from './pages/loto-app/loto-app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AddNumComponent } from './cmps/add-num/add-num.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LotoAppComponent,
    AppHeaderComponent,
    AddNumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
