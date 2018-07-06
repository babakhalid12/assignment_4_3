import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }

 // Write method in service class which returns array 
 // of batch details
 GetBookDetails()
 {
          return[
          {"Name":"JAVA", "Price":200, "Author":"JON", "Noofpages":220},
          {"Name":"C","Price":100,"Author":"Dennies","Noofpages":100},
          {"Name":"Angular","Price":250,"Author":"unknown","Noofpages":50},

         ];
 }
 
 }
 