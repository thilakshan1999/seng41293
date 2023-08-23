import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyStockService } from '../../../services/daily-stock/daily-stock.service';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { IDailtyStock } from '@seng41293/model';

@Component({
  selector: 'seng41293-admin-daily',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './admin-daily.component.html',
  styleUrls: ['./admin-daily.component.scss']
})
export class AdminDailyComponent {
  dailyStocks$:Observable<IDailtyStock[]>;
  constructor(private dailyStockService:DailyStockService){
    this.dailyStocks$=this.dailyStockService.findAll();
  }
}
