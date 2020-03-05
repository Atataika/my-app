import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'posts', component: PostsComponent },
  {
    path: 'sandbox',
    loadChildren: () => import('./components/sandbox/sandbox.module').then(m => m.SandboxModule)
  },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
