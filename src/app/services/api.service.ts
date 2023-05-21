import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly apiUrl = "http://datasourcenj.herokuapp.com/action/";

  // readonly apiUrl2 = "datasourcenj.herokuapp.com/action/"

  constructor(private http : HttpClient) { }

  performAction(val:any){
    return this.http.post(this.apiUrl,val);
  }

  // performAction2(val: any): Observable<any> {
  //   return this.http.post(this.apiUrl2, val);
  // }
  
}
