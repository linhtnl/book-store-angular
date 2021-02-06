import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BootstrapHeaderComponent } from './components/bootstrap-header/bootstrap-header.component';
import { HeaderClientComponent } from './components/client/header-client/header-client.component';
import { FooterClientComponent } from './components/client/footer-client/footer-client.component';
import { NavbarClientComponent } from './components/client/navbar-client/navbar-client.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BootstrapHeaderComponent,
    HeaderClientComponent,
    FooterClientComponent,
    NavbarClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
