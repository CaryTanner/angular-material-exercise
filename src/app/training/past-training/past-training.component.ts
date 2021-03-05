import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css'],
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<Exercise>();
  displayedColumns: string[] = [
    'name',
    'duration',
    'calories',
    'date',
    'status',
  ];

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.dataSource.data = this.trainingService.getExercises();
    console.log(this.dataSource);
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  doFilter(value: string){
    this.dataSource.filter = value.trim().toLowerCase()

  }
}
