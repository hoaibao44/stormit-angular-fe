import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageLayoutComponent } from './page/homepage-layout/homepage-layout.component';
import { BlogLayoutComponent } from './page/blog-layout/blog-layout.component';

const routes: Routes = [
  {path:'home',component:HomepageLayoutComponent},
  {path:'blogs',component:BlogLayoutComponent},
  {path:'',component:HomepageLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
