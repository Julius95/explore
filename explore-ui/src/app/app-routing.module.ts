import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './components/todos/todos.component';
import {AboutComponent} from './components/pages/about/about.component';
import {FormComponent} from './components/form/form.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  { path: '', component:TodosComponent},
  {path:'form', component:FormComponent},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
