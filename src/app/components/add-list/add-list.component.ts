import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  item:any ={
    name: ''
  }
  constructor(private service: ConnectionService){

  }

  ngOnInit() {
  }

  add(){
    this.service.addItem(this.item);
    //this.item = '';
  }

}
