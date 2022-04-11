import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  todo = ['Episode I', 'Episode II', 'Episode III'];
  progress: string[] = [];
  done: string[] = [];
  inputText = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeText(){
    if(this.inputText ===''){
      return;
    }
    this.todo.push(this.inputText);
    this.inputText = '';
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
