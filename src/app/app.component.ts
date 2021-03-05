import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenavRef 
  openSidenav = false
  title = 'training-flex';
 
  
  toggleSidenav(){
    this.sidenavRef.toggle()
  }
}
