import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloghomeComponent } from './bloghome/bloghome.component';
import { PuzzelComponent } from './puzzel/puzzel.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  {path:'',component:BloghomeComponent,
  children:[

  {path:'story', component:StoryComponent},
  {path: 'puzzel',component:PuzzelComponent}

          ]

  }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
