import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Todo} from 'src/app/models/Todo'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  //set dynamic classes
  setClasses(){
    let classes = {
      'is-complete': this.todoItem.completed
    }
    return classes;
  }
  //on-toggle
  onToggle(todoItem){
    todoItem.completed = !todoItem.completed
  }
  onDelete(todoItem){
    this.deleteTodo.emit(todoItem);
  }

}
