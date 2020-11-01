import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'offers', loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule) },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule) },
  { path: 'profil', loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
