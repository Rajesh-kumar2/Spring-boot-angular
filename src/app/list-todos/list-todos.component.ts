import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;
  /* =[
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())
  ] */

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
   this.refreshTodo();
  }

  refreshTodo(){
    this.todoService.retriveAllTodos('rajdatheist').subscribe(
      response => {
        //console.log(response);
        this.todos = response;
      },
      error => {
        console.log(`error occurred!`);
      }
    )
  }

  deleteTodo(id){
    //console.log(`delete ${id}`);
    this.todoService.deleteTodo('rajdatheist', id).subscribe(
      response =>{
        //console.log(response);
        this.message=`Id ${id} deleted successfully!`
        this.refreshTodo();
      }
    )
  }
  updateTodo(id){
    //console.log(`Update ${id}`);
    this.router.navigate(['todos',id]);
  }
  addTodo(){
    this.router.navigate(['todos', -1])
  }

}
