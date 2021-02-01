import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises = [
    {name:'Plank',value: 'plank'},
    {name:'Burpees',value: 'burpees'},
    {name:'Crunches',value: 'crunches'},
    {name:'High Knees',value: 'high-knees'},
    {name:'Pushup',value: 'pushup'}
    ]

    @Output() ongoingTraining = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  startTraining(){
    this.ongoingTraining.emit()
  }

}
