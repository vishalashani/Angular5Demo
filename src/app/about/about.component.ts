import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { debug } from 'util';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('goals',[
      transition('* => *',[
          query(':enter',style({opacity:0}),{optional:true}),

          query(':enter',stagger('300ms',[
            animate('.6s ease-in',keyframes([
              style({ opacity:0, transform:'translateY(-75%)',offset:0 }),
              style({ opacity:.5, transform:'translateY(35px)',offset:.3 }),
              style({ opacity:1, transform:'translateY(0)',offset:1 }),
            ])) ]),{optional:true}),

          query(':leave',stagger('300ms',[
            animate('.6s ease-in',keyframes([
              style({ opacity:1, transform:'translateY(0)',offset:0 }),
              style({ opacity:.5, transform:'translateY(35px)',offset:.3 }),
              style({ opacity:0, transform:'translateY(-75%)',offset:1 }),
            ])) ]),{optional:true})
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  bucketCount:number;
  btnText : string="Add an item";
  goalText : string= "My first life goal";
  goals = [];
  serviceDate:string;
  constructor(private route:ActivatedRoute, private _data:DataService) { 
    this.route.params.subscribe(res=>console.log(res.id));
  }

  ngOnInit() {
    debugger;
    this.bucketCount = this.goals.length;
    this.serviceDate = this._data.getTime();
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.bucketCount = this.goals.length;
  }

  removeItem(i){
    this.goals.splice(i,1);
  }

}
