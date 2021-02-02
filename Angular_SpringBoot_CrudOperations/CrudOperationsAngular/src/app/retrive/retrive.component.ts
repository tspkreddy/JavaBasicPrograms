import { Component, OnInit } from '@angular/core';
import { CrudService, Info } from '../crud.service';

@Component({
  selector: 'app-retrive',
  templateUrl: './retrive.component.html',
  styleUrls: ['./retrive.component.css']
})
export class RetriveComponent implements OnInit { 

  info:Info=new Info(NaN,"","");
  dataArray:any=[];

  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    

     this.crudService.getData().subscribe( data => { this.dataArray=data;})
     
}

save(index:number): void {    
  this.info=this.dataArray[index];
  console.log(this.info);  
  this.crudService.save(this.info).subscribe( data => { alert (data);          }); 
}; 

}
