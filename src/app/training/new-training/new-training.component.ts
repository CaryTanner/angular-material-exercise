import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[]
  chosenExercise = new FormControl('', Validators.required)
  @Output() startTrainingEvent: EventEmitter<any> = new EventEmitter<void>()


  constructor( private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExecises()

  }

  startTraining(){
    if(this.chosenExercise.value){
      this.trainingService.startExercise(this.chosenExercise.value)
    }
    
  }
}
