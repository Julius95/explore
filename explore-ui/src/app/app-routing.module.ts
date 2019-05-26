import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './components/todo-components/todos/todos.component';
import {AboutComponent} from './components/pages/about/about.component';
import {LoginComponent} from './components/login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { DishesComponent } from './components/pages/dishes/dishes.component';

const routes: Routes = [
  { path: '', component:TodosComponent, canActivate:[AuthGuardService]},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent, canActivate:[AuthGuardService]},
  {path:'dish', component:DishesComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
