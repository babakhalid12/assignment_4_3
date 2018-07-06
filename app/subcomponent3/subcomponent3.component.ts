import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-subcomponent3',
  templateUrl: './subcomponent3.component.html',
  styleUrls: ['./subcomponent3.component.css']
})
export class Subcomponent3Component implements OnInit {

  public books=[];
  constructor(private _myservice:MyserviceService)
  {}

  ngOnInit() {
    this.books=this._myservice.GetBookDetails();
  }

}
  
