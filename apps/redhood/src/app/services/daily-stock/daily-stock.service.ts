import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDailtyStock } from '@seng41293/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyStockService {

  constructor(private httpClient:HttpClient) { }

  findAll():Observable<IDailtyStock[]>{
    return this.httpClient.get<IDailtyStock[]>('daily-stock')
  }
}
