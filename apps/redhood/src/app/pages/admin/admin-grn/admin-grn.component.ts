import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../services/app/app.service';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { ShowLoading } from '../../../states/app/app.actions';
@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss']
})
export class AdminGrnComponent {
  @Input({required:true}) 
  label! :string;
  @Output() 
  update = new EventEmitter<string>();

  constructor(private store:Store){}
  toggle(){
    this.store.dispatch(new ShowLoading(true))
  }
}
