import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import{MatToolbarModule} from '@angular/material/toolbar'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState } from './states/app/app.state';
@Component({
  standalone: true,
  imports: [ RouterModule,MatProgressBarModule,CommonModule,MatToolbarModule],
  selector: 'seng41293-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  email$:Observable<string|undefined>
  loading$: Observable<boolean>
  constructor(private store:Store){
    this.email$=this.store.select(AppState.email);
    this.loading$=this.store.select(AppState.loading);
    // this.email$.subscribe((email)=>{
    //   console.log(email)
    // });
  }
}
