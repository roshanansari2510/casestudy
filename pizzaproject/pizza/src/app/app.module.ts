import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './user/cart/cart.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';
import { EmptycartComponent } from './user/emptycart/emptycart.component';
import { GlowComponent } from './user/glow/glow.component';
import { MyprofileComponent } from './user/myprofile/myprofile.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { FamousComponent } from './ind/famous/famous.component';
import { HeaderComponent } from './ind/header/header.component';
import { MainComponent } from './ind/main/main.component';

import { HttpClientModule } from '@angular/common/http';
import { UserofferComponent } from './user/useroffer/useroffer.component';
import { OfferComponent } from './ind/offer/offer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ChangepasswordComponent,
    EditprofileComponent,
    EmptycartComponent,
    GlowComponent,
    MyprofileComponent,
    NavbarComponent,
    UserhomeComponent,
    FamousComponent,
    HeaderComponent,
    MainComponent,
    UserofferComponent,
    OfferComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
