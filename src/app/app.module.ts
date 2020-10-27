import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { DetailComponent } from './component/detail/detail.component';
import { HomeComponent } from './component/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MenuComponent } from './component/menu/menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';



const firebaseConfig = {
  apiKey: 'AIzaSyABYTAH95oVFpVllC0hpX1OirxV85gclaQ',
  authDomain: 'miexchangeapp.firebaseapp.com',
  databaseURL: 'https://miexchangeapp.firebaseio.com',
  projectId: 'miexchangeapp',
  storageBucket: 'miexchangeapp.appspot.com',
  messagingSenderId: '229928549256',
  appId: '1:229928549256:web:642c6b66f10307f3b4583d',
  measurementId: 'G-N6K9CNC9YK'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DetailComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
