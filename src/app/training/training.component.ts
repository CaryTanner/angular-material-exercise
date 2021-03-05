import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining = false;
  runningExerciseSub: Subscription;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.runningExerciseSub = this.trainingService.exerciseChange.subscribe(
      currentExercise => {
        currentExercise ? this.ongoingTraining = true : this.ongoingTraining = false
      }
    );
  }

  ngOnDestroy(){
    this.runningExerciseSub.unsubscribe()
  }
}
