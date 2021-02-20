import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FootermenuComponent } from './footermenu/footermenu.component';
import { ProductlistComponent } from './productlist/productlist.component';
import {Rating} from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootermenuComponent,
    ProductlistComponent,
    Rating
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
