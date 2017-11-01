import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'acceso', component: LoginComponent },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
	imports: [
	    BrowserModule,
	    RouterModule.forRoot(
	      appRoutes,
	      { enableTracing: true }
	    )
  	],
  	declarations: [
	    AppComponent,
	    HomeComponent,
	    LoginComponent,
	    ContactComponent,
	    GalleryComponent,
	    NavbarComponent
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
