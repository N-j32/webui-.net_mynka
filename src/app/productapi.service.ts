import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
//postsapi - heroku
import { environment } from 'src/environments/environment';
//json-server --watch db.json for localhost
//npm install -g json-server
@Injectable({
  providedIn: 'root'
})
export class ProductapiService {
  constructor(private http:HttpClient) { }
posturl=environment.userapi;
  postProducts(data:any){
    return this.http.post<any>(this.posturl, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getProductDetails(){
    return this.http.get<any>(this.posturl).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateProducts(data:any, id:number){
    return this.http.put<any>(this.posturl+'/'+ id, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteProducts(id:number){
    return this.http.delete<any>(this.posturl+'/'+ id).pipe(map((res:any)=>{
      return res;
    }))
  }

}
