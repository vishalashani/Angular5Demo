import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//after created service it should import and have to register in providers 
//import {DataService} from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(res=>console.log(res.id));
   }

  ngOnInit() {
    //this._data.getTime();
  }


}
