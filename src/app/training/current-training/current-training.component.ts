import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress : number = 0;
  progressBar;
  @Output() exitTraining = new EventEmitter<void>()

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.progressTracker()
  }

  progressTracker(){
    this.progressBar = setInterval(() => {
      if(this.progress>=100){
        clearInterval(this.progressBar)
      }else{
        this.progress = this.progress + 5
      }
    },1000) 
  }

  cancelTraining(){
    clearInterval(this.progressBar)
    let dialogRef = this.dialog.open(StopTrainingComponent)

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.exitTraining.emit()
      }else{
        this.progressTracker()
      }
    })
  }
}
