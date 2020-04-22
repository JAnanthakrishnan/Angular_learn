import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id:1,
        title:'Learn React',
        completed:false
      },
      {
        id:2,
        title:'Learn Vue',
        completed:true
      },
      {
        id:3,
        title:'Learn Angular',
        completed:false
      },
    ]
  }
  deleteTodo(todo:Todo){
    this.todos = this.todos.filter(item => item.id!==todo.id)
  }
  addTodo(todo:Todo){
    todo.id = this.todos.length+1;
    this.todos.push(todo)
  }

}
