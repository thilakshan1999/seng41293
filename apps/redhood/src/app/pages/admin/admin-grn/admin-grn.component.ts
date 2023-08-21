import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { ShowEmail, ShowLoading } from '../../../states/app/app.actions';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss']
})
export class AdminGrnComponent {
  emailController=new FormControl('thilk@gmail.com',[
    Validators.required,
    Validators.email,
  ]);
   
  @Input({required:true}) 
  label! :string;
  @Output() 
  update = new EventEmitter<string>();

  constructor(private store:Store){}
  toggle(){
    this.store.dispatch(new ShowLoading(true))
  }
  change(){
    if(this.emailController.valid){
          this.store.dispatch(new ShowEmail(this.emailController.value as string));
    }

  }
}
