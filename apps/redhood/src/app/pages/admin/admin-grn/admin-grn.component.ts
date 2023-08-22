import { Component, Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { Firestore,addDoc,collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
interface GRN{
  date:Date;
  customer:{
    name:string;
    phone:string
  };
}
@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [CommonModule
    ,MatButtonModule
    ,MatCardModule
    ,ReactiveFormsModule
    ,MatDatepickerModule
    ,MatInputModule
  ],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss']
})
export class AdminGrnComponent {
  @Input({required:true}) label! :string;
  firestore: Firestore = inject(Firestore);

  grns$:Observable<GRN[]>

  dateCtrl=new FormControl();
  nameCtrl=new FormControl();
  phoneCtrl=new FormControl();

  customerCtrl =new FormGroup({
    name:this.nameCtrl,
    phone:this.phoneCtrl,
  })
  grnFormGroup=new FormGroup({
    date:this.dateCtrl,
    customer:this.customerCtrl,
  })

  grnCollection=collection(this.firestore,'grn');
  async OnSave(){
    console.log(this.grnFormGroup.value);
    const date=new Date(this.dateCtrl.value);
    const toSave ={
      ...this.grnFormGroup.value,
      date,
    }
    await addDoc(this.grnCollection,toSave) ;
  }
  constructor(){
    this.grns$=collectionData(this.grnCollection)as Observable<GRN[]>;
  }
}
