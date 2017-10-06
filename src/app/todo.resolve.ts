import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Injectable()
export class TodoResolver implements Resolve<any> {
  constructor(
    private _todoService: TodoService
  ){}

  resolve( route: ActivatedRouteSnapshot ) {
    let todoId = route.params['todo-id'];
    console.log("results",this._todoService.getTodoById(Number(todoId)));
    let todo:Todo = new Todo();
    todo = this._todoService.getTodoById(Number(todoId));
    if(todo.state === true)
    {
      console.log("sele id",todo.id);
      this._todoService.gettodo(todo.id);
    }
    else {
      this._todoService.setselectitem(todo);
    }
    return ;
  }
}
