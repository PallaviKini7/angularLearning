import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component'
import { UsersModule } from './users/users.module';
import { AddressComponent } from './home/address/address.component';
import {ButtonModule} from 'primeng-lts/button';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddressComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    UsersModule,
    FormsModule,
    ButtonModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
