import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent }   from './blog/blog.component';
import { AboutComponent }   from './about/about.component';
import { HomeComponent }   from './home/home.component';
import { DetailsComponent }   from './details/details.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog/:label/:name', component: DetailsComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
