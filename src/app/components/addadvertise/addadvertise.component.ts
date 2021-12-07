import { Component, OnInit } from '@angular/core';
import { AdvertiseService } from 'src/app/services/advertise.service';
import { Advertise } from 'src/models/Advertise';

@Component({
  selector: 'app-addadvertise',
  templateUrl: './addadvertise.component.html',
  styleUrls: ['./addadvertise.component.css']
})
export class AddadvertiseComponent implements OnInit {

  message:string;
  constructor(private service: AdvertiseService) { }

  ngOnInit() {
  }

  createAd(data:Advertise){
    this.service.addAdvertise(data).subscribe(
      (result)=>{
        this.message = result
      },
      (fail)=>{
        this.message = fail;
      }
    );
  }
}
