import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListSiswaComponent } from './components/list-siswa/list-siswa.component';
import { CreateSiswaComponent } from './components/create-siswa/create-siswa.component';
import { EditSiswaComponent } from './components/edit-siswa/edit-siswa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ListSiswaComponent,
    CreateSiswaComponent,
    EditSiswaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [ElectronService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
