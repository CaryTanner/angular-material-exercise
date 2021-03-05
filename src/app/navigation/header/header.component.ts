import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSidenavEvent: EventEmitter<any> = new EventEmitter<void>();
  loggedIn = false
  authChangeSub: Subscription

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
   this.authChangeSub = this.authService.authChange.subscribe(logInStatus => 
      this.loggedIn = logInStatus)
  }

  ngOnDestroy(){
    this.authChangeSub.unsubscribe()
  }

  toggleSidenav() {
    this.toggleSidenavEvent.emit();
  }

  onLogOut(){
    this.authService.logout()
  }
}
