import { Component, OnInit } from '@angular/core';
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  title: string;
  contentModel: string;
  constructor(public toastr: ToastrManager) { 
    
  }

  ngOnInit(){
  }

  createCustomer()
  {
    this.toastr.successToastr("This is a vaild form.", "Success!");
  }
}
