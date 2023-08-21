import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AdminGrnComponent } from './admin-grn/admin-grn.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'seng41293-admin',
  standalone: true,
  imports: [MatTabsModule,AdminGrnComponent,CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  labelGRN='RedHood';
}
