import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { TodoService } from '../../todo.service';


@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  newTodo: Todo = new Todo();

  flag: boolean = true;
  ngOnInit() {
    // this.todoService.getTodos();
    // let str = this.todoService.getTodos().subscribe(result=>{
    //   this.todos = result.list;
    //   console.log("ddd", this.todos);
    // });

    // this.todos= this.todoService.getTodos().subscribe(result => this.todos = result.list as Todo[]);

  }

  constructor(private todoService: TodoService) {
  }

  addTodo() {
    if (( this.newTodo.title.trim() === '')||( this.newTodo.content.trim() === '')) {
      this.flag = false;
      return;
    }
    else {
      this.flag = true;
    }
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  get todos() {
    // console.log("d");
    // let str =this.todoService.getTodos().subscribe();
    // console.log("list of todo",str);
    // return str;
    return this.todoService.getAllTodos();
  }
}
