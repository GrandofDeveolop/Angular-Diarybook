import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class TodoService {
  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];
  selectitem: Todo = new Todo();


  constructor(private _http:Http) {
    this.getTodos();
  }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }
  getselectitem(): Todo {
    return this.selectitem;

  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    // console.log("id", id, this.todos);

    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  getTodos()  {
    console.log("hello");

     this._http.get('/api/plans.json')
      .map(response =>{
        // console.log("ffff",response.json());
        return response.json();
      }).subscribe(result=>{

        console.log(result.list);
        for(var i=0; i<result.list.length ;i++)
       {
         let item = result.list[i];
         console.log("item",item['title']);
          let todo;
          todo = new Todo();
          todo.state = true;
         todo.title = item['title'];
         todo.content = item['content'];
         if (!todo.id) {
           todo.id = ++this.lastId;
         }
         this.todos.push(todo);
         // return this;
       }
        // this.todos = result.list;
     });
    // return httprequest;
  }
  gettodo(id:number)
  {
    let url = `/api/plan-${id}.json`;
    console.log("url",url);
    this._http.get( url)
      .map(response =>{
        // console.log("ffff",response.json());
        return response.json();
      }).subscribe(result=>{
        console.log("resultsssss", result);
        this.selectitem = result;
        // return this;
      });
  }
  setselectitem(todo:Todo)
  {
    this.selectitem = todo;
  }


  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
