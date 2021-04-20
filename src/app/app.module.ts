import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListModule } from './modules/todo-list/todo-list.module';
// import { TodoListTaskFormComponent } from './modules/todo-list/containers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
