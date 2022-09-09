import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CsButtonComponent } from './component/cs-button/cs-button.component';
import { HomepageLayoutComponent } from './page/homepage-layout/homepage-layout.component';
import { BlogLayoutComponent } from './page/blog-layout/blog-layout.component';
import { CsCardComponent } from './component/cs-card/cs-card.component';
import { CsCardHeaderComponent } from './component/cs-card/cs-card-header.component';
import { CsCardBodyComponent } from './component/cs-card/cs-card-body.component';
import { CsCardFoooterComponent } from './component/cs-card/cs-card-footer.component';
import { CsNavbarComponent } from './component/cs-navbar/cs-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CsButtonComponent,
    HomepageLayoutComponent,
    BlogLayoutComponent,
    CsCardComponent,
    CsCardHeaderComponent,
    CsCardBodyComponent,
    CsCardFoooterComponent,
    CsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
