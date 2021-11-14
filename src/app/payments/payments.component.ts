import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor() { }

  firstName='';
  choose =false;
  preferences='';


  paragraph='';

  resetForm(formvalue:NgForm){
    formvalue.reset();
  }
  setValues(formvalue:NgForm){
    let payment={
      firstName:'Sarath',
      choose :false,
      preferences:'',
      paragraph:'I am happy'

    }
    formvalue.setValue(payment);
  }

  payments(paymentsvalue:NgForm){
    console.log(paymentsvalue.value);

  }

  ngOnInit(): void {
  }

}
