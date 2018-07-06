import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-subcomponent2',
  templateUrl: './subcomponent2.component.html',
  styleUrls: ['./subcomponent2.component.css']
})
export class Subcomponent2Component implements OnInit {

  public books=[];
  constructor(private _myservice:MyserviceService)
  {}

  ngOnInit() {
    this.books=this._myservice.GetBookDetails();
  }

}
  
