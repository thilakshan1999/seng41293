import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from './services/app/app.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [ RouterModule,MatProgressBarModule,CommonModule],
  selector: 'seng41293-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(protected appService:AppService){}
}
