import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrainingComponent } from '../training.component';

@Component({
  selector: 'app-stop-training',
  template: `<h1 mat-dialog-title>Are you sure?</h1>
  <mat-dialog-content>
      You are already {{passedData.progress}} % finished.
  </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">YES</button>
      <button mat-button [mat-dialog-close]="false">NO</button>
    </mat-dialog-actions> `,
})
export class StopTrainingComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any){

    }
}
