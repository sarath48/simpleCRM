import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { LoansListComponent } from './loans-list/loans-list.component';
import { PathLocationStrategy, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    LoansListComponent,
    SearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSlideToggleModule
  ],
  providers: [{provide : LocationStrategy, useClass:PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
