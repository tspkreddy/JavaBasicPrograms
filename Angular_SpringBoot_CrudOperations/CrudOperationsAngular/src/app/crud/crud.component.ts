import { Component, OnInit } from '@angular/core';
import { CrudService, Info } from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  info:Info=new Info(NaN,"","");  
  
  details: any = [];
  
  
  
 constructor(private crudService:CrudService){}

 ngOnInit() {}

 save(): void {  this.crudService.save(this.info).subscribe( data => { alert (data);          }); };

 fetch(): void { this.crudService.fetch(this.info).subscribe( data => { this.details=data; 
                                                            this.info.name=this.details[0]; 
                                                           this.info.email=this.details[1];   }); };   

 delete(): void { this.crudService.delete(this.info).subscribe( data => { alert(data[0]);   }); };    


}
