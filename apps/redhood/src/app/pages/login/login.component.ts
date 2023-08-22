import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Store } from '@ngxs/store';
import { UpdateUser } from '../../states/app/app.actions';
import { catchError, from, tap, throwError } from 'rxjs';
@Component({
  selector: 'seng41293-login',
  standalone: true,
  imports: [CommonModule, MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  private angularFireAuth:AngularFireAuth = inject(AngularFireAuth)

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

  constructor(private  router:Router,private store:Store){}

  onLogin() {
    const password=this.loginFormGroup.get('password')?.value;
    const authPromise=this.angularFireAuth.signInWithEmailAndPassword
    (this.emailController.value as string,
      password as string);
    from(authPromise)
    .pipe(
      tap((credential)=>{
        if(credential.user)
         this.store.dispatch(new UpdateUser(credential.user));
      }),
      tap(()=>this.router.navigate(['/admin'])),
      catchError((e)=>{
        return throwError(() => e);
      })
    )
    .subscribe();
  }
}

