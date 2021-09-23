import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    usr:'',
    pwd:''
  }

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._auth.loginUser(this.user)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this._router.navigate(['/'])
      }
    )
  }

}
