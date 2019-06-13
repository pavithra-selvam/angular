import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';

import { freeApiService } from './services/freeapi.service';
import { TodoAPIComponent } from './todo-api/todo-api.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TodosComponent,
    TodoAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot()

  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
