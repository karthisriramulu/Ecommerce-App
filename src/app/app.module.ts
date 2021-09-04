import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    ProductsComponent,
    NavbarComponent,
    NotFoundComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAESRb9D85lAm4wyGVg5ir6ccKXsBsX8Dc",
      authDomain: "ecommerceapp-3e2d2.firebaseapp.com",
      projectId: "ecommerceapp-3e2d2",
      storageBucket: "ecommerceapp-3e2d2.appspot.com",
      messagingSenderId: "954381883378",
      appId: "1:954381883378:web:a6677ba8bd969d54fdfd6b",
      measurementId: "G-VPC3XSXPSM"
    }),

    AngularFirestoreModule,

    AngularFireAuthModule

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
