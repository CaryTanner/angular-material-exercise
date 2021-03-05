import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hide = true;
  maxDate: Date
  signupForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    birthdate: ['', [Validators.required], []],
    terms: [false, [Validators.requiredTrue]]
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    
  }
  
  ngOnInit(): void {
    this.maxDate = new Date()
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18 )
  }

  onSubmit() {
    
    this.authService.registerUser({email: this.signupForm.value.email, password: this.signupForm.value.email})
    //this.router.navigate(['/'])
    this.signupForm.reset();
  }
}
