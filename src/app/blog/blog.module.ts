import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { StoryComponent } from './story/story.component';
import { PuzzelComponent } from './puzzel/puzzel.component';
import { BloghomeComponent } from './bloghome/bloghome.component';

import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    StoryComponent,
    PuzzelComponent,
    BloghomeComponent,
    
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class BlogModule { }
