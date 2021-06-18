import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: 'about', component: ContentComponent },
  { path: 'recent-projects', component: RecentProjectsComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  ContentComponent,
  RecentProjectsComponent,
  WorkComponent,
  ContactComponent,
  BlogComponent,
];
