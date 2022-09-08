import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CsButtonComponent } from './component/cs-button/cs-button.component';
import { HomepageLayoutComponent } from './page/homepage-layout/homepage-layout.component';
import { BlogLayoutComponent } from './page/blog-layout/blog-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CsButtonComponent,
    HomepageLayoutComponent,
    BlogLayoutComponent,
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
