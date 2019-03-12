import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';

//Html views
import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import { AddDVDComponent } from './add-dvd/add-dvd.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component' ;
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayItemsComponent} from './display-items/display-items.component';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    AddDVDComponent,
    BorrowBookComponent,
    ReturnBookComponent,
    NavigationBarComponent,
    HomeComponent,
    DisplayItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'' , component:HomeComponent},
      {path:'addBooks' , component:AddBookComponent},
      {path:'borrowBooks' , component:BorrowBookComponent},
      {path:'returnBooks' , component:ReturnBookComponent},
      {path:'addDVD' , component:AddDVDComponent},
      {path: 'displayItem' , component:DisplayItemsComponent},
    ]),
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: false
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
