import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodosComponent } from './todos/todos.component';
import { TodoAPIComponent } from './todo-api/todo-api.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

const routes: Routes = [  
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'about', component: AboutComponent,
  },
  {
    path: 'todos-api', component: TodoAPIComponent,
  },
  {
    path: 'stopwatch', component: StopwatchComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
