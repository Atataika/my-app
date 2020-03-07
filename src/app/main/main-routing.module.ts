import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, data: { title: 'Main page' } },
  { path: 'posts', component: PostsComponent, data: { title: 'Posts' } },
  {
    path: 'sandbox',
    loadChildren: () => import('./components/sandbox/sandbox.module').then(m => m.SandboxModule),
    data: { title: 'Sandbox' }
  },
  { path: 'about', component: AboutComponent, data: { title: 'About me' } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
