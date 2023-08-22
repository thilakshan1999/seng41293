import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {HttpClient} from '@angular/common/http'
import { Observable, tap } from 'rxjs';

interface User{
  name:string;
  email:string;
}
@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatCardModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss']
})
export class AdminGrnComponent {
  @Input({required:true}) label! :string;

  users$:Observable<User[]>;

  constructor(private httpClient:HttpClient){
    this.users$=this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
