import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './ind/header/header.component';
import { MainComponent } from './ind/main/main.component';
import { OfferComponent } from './ind/offer/offer.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { CartComponent } from './user/cart/cart.component';
import { MyprofileComponent } from './user/myprofile/myprofile.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { EmptycartComponent } from './user/emptycart/emptycart.component';
import { UserofferComponent } from './user/useroffer/useroffer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  {path: 'myprofile', component: MyprofileComponent },
  { path: 'change-password', component: ChangepasswordComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'userhome', component: UserhomeComponent },
  { path: 'empty-cart', component:  EmptycartComponent },
  { path: 'cart', component: CartComponent },
  { path: 'offer', component: OfferComponent},
  { path: 'useroffer', component: UserofferComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'reset', component: ResetComponent},
  { path: 'reset-password', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent, MainComponent]