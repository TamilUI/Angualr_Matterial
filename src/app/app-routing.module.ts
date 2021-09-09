import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApicalldataComponent } from './apicalldata/apicalldata.component';
import { ChildComponent } from './child/child.component';
import { CoronaComponent } from './corona/corona.component';
import { InjactableComponent } from './injactable/injactable.component';
import { InsertPostUpdateDeleteComponent } from './insert-post-update-delete/insert-post-update-delete.component';
import { LearningangularComponent } from './learningangular/learningangular.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LocalstorageSessionstorageComponent } from './localstorage-sessionstorage/localstorage-sessionstorage.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { ParentComponent } from './parent/parent.component';
import { SampleTestingComponent } from './sample-testing/sample-testing.component';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: 'learning_angular', component: LearningangularComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Table', component: TableComponent },
  { path: 'apicalldata', component: ApicalldataComponent },
  { path: 'testkathir', component: TestComponent},
  { path: 'ipud' , component:InsertPostUpdateDeleteComponent},
  { path: 'child' , component:ChildComponent},
  { path: 'parent' , component:ParentComponent},
  { path: 'lifecycle', component: LifeCycleComponent},
  { path: 'localstorge', component:LocalstorageSessionstorageComponent},
  { path: 'inject', component:InjactableComponent},
  { path: 'observable', component:ObservableComponent},
  { path:  'testing' , component:SampleTestingComponent},
  { path:  'Corona', component:CoronaComponent},
  
  { path: 'lazyloading',loadChildren:()=> import('./blog/blog.module').then(m=>m.BlogModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
