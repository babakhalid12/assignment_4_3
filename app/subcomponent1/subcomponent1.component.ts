import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-subcomponent1',
  templateUrl: './subcomponent1.component.html',
  styleUrls: ['./subcomponent1.component.css']
})
export class Subcomponent1Component implements OnInit {

  public books=[];
  constructor(private _myservice:MyserviceService)
  {}

  ngOnInit() {
    this.books=this._myservice.GetBookDetails();
  }

}
  
