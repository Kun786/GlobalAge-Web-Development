import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StoreComponent } from './store/store.component';
import { AddToCartComponent } from './store/add-to-cart/add-to-cart.component';
import { SenderComponent } from './sender/sender.component';
import { GetterComponent } from './getter/getter.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'store', component: StoreComponent },
  { path:'add-to-cart/:id', component:AddToCartComponent },
  { path:'sender', component:SenderComponent },
  { path:'getter/:meraVariable', component:GetterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
