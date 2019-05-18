import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  
  //Todo objects show in the UI
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos=>{
      this.todos=todos;
    });
  }

  deleteTodo(todo:Todo){
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.delete(todo).subscribe();
  }

  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(todo => this.todos.push(todo))
  }

}
