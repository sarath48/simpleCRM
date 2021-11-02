import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';
  superPower:String="Hulk";
  success:boolean=true;
  contacts=[
    {
      "firstName":"Sarath",
      "LastName":"Santhosh",
      "Age":24
    },
    {
      "firstName":"Sarath1",
      "LastName":"Santhosh2",
      "Age":25
    },
    {
      "firstName":"Sarath2",
      "LastName":"Santhosh2",
      "Age":26
    }
  ]
}
