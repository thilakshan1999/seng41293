import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'seng41293-login',
  standalone: true,
  imports: [CommonModule, MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  emailController=new FormControl('thilakshanlk@gmail.com',[
    Validators.required,
    Validators.email,
  ]);

  loginFormGroup= new FormGroup({
    email:this.emailController,
    password:new FormControl('RedHood1105@',[
      Validators.required,
      Validators.minLength(3),
    ]),
  })

  constructor(private  router:Router){}

  onLogin() {
    console.log(this.loginFormGroup.valid);
    this.router.navigate(['/admin']);
  }
}

