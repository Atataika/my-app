import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainPageComponent, PostsComponent, AboutComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
  exports: [MainRoutingModule]
})
export class MainModule {}
