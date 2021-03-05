import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css'],
})
export class CurrentTrainingComponent implements OnInit {
  runningExercise: Exercise;
  value = 0;
  timer;
  dialogRef;
  // @Output() trainingExit = new EventEmitter();

  constructor(private dialog: MatDialog, private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.runningExercise = this.trainingService.getRunningExercise()
    this.startTimer();

  }

  startTimer() {
    const step = this.runningExercise.duration / 100 * 1000
    this.timer = setInterval(() => {
      this.value = this.value + 1;
      if (this.value >= 100) {
        clearInterval(this.timer);
        this.trainingService.completeExercise()
      }
    }, step);
  }

  onStop() {
    clearInterval(this.timer);
    //this.value = 0
    this.dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.value,
      },
    });
    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        //this.trainingExit.emit();
        this.trainingService.cancelExercise(this.value)
      } else {
        this.startTimer();
      }
    });
  }
}
