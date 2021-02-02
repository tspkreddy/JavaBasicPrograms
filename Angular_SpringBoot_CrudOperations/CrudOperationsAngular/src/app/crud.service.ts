import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Info{
  constructor(public id:number, public name:string,  public email:string){}  
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient:HttpClient) { }

  public save(info: Info) {   //create if not exists //update if exists
    return this.httpClient.post<Info[]>("http://localhost:8080/save",info)   }
 
    public fetch(info: Info) {   //retrive the data
    return this.httpClient.post<Info[]>("http://localhost:8080/fetch",info)  }
    
    public delete(info: Info) {   //delete the data
    return this.httpClient.post<Info[]>("http://localhost:8080/delete",info) }


    public getData(){
      return this.httpClient.get("http://localhost:8080/getData")
    }
}
