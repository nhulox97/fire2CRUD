import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
   selector: 'app-list',
   templateUrl: './list.component.html',
   styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   items: any;

   itemEdit: any = {
      name: ''
   };

   constructor(private connection: ConnectionService) {
      connection.listItem().subscribe(item => {
         this.items = item;
         //console.log(this.items);
      })
   }

   ngOnInit() {
   }

   delete(item) {
      this.connection.deleteItem(item);
   }

   edit(item) {
      this.itemEdit = item;
   }

   addItemEdit(){
      this.connection.addItemEdit(this.itemEdit);
   }

}
