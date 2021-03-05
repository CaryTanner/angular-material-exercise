import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  
  loginForm = this.fb.group({
    password: ['', [Validators.required], [this.passwordAuth]],
    email: ['', [Validators.required, Validators.email]],
    
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    
  }
  
  ngOnInit(): void {
    
  }

  passwordAuth(form: FormControl): Promise<any> | Observable<any> | boolean{
    const promise = new Promise((resolve, reject)=> {
      setTimeout(()=>{
        if(form.value.length < 6){
          resolve({'minLengthError': true})
        } else {
          resolve(null)
        }
      }, 1500)
    })

    return promise
  }

  onSubmit() {
    
    this.authService.login({email: this.loginForm.value.email, password: this.loginForm.value.password})
    //this.router.navigate(['/'])
    this.loginForm.reset();
  }
}
