import { Component, OnInit } from '@angular/core';
import { TodoItem } from './to-do-item';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  tasks: TodoItem[] = [
    { description: 'Checar e-mails', done: true},
    { description: 'Conferir agenda de compromissos', done: false}
  ];

  addTask(description: string) {
    this.tasks.push({
      description: description,
      done: false
    })
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
}