import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loginUser(user:any){
    return this.http.post<any>("http://localhost:3000/login",user)
    
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')

  }
  newUser(item){
    return this.http.post("http://localhost:3000/adduser",{"user":item})
    .subscribe(data=>{console.log(data)})
  }

  constructor(private http:HttpClient) { }
}
