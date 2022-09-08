import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({providedIn:'root'})
export class APIService {
    headers = new HttpHeaders({
        'Content-Type':'application/json',
    })

    constructor(
        private http:HttpClient
    
    ) { }

    fetchData = (targetUrl:string) => {
        return this.http.get<any>(targetUrl,{headers:this.headers})
    }
}