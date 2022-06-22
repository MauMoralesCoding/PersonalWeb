import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutModule } from './components/about/about.module';
import { ContactModule } from './components/contact/contact.module';
import { CopyrightModule } from './components/copyright/copyright.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { PortafolioModule } from './components/portafolio/portafolio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    ContactModule,
    CopyrightModule,
    FooterModule,
    HeaderModule,
    NavbarModule,
    PortafolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
