import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() toggleSidenavEvent: EventEmitter<any> = new EventEmitter<void>();
  loggedIn = false
  authChangeSub: Subscription

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authChangeSub = this.authService.authChange.subscribe(logInStatus => 
       this.loggedIn = logInStatus)
   }
 
   ngOnDestroy(){
     this.authChangeSub.unsubscribe()
   }
   
  toggleSidenav(){
    this.toggleSidenavEvent.emit()
  }

  onLogOut(){
    this.authService.logout()
    this.toggleSidenav()
  }
}
