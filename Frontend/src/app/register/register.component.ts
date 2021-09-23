import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user.model';
import { BookService } from '../book.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title:String = "Register";
  constructor(private authService:AuthService, private router:Router) { }
  userItem = new UserModel("","","","");
  

  ngOnInit(): void {
  }
  addUser() {
   
    this.authService.newUser(this.userItem);
    alert("Success");
    this.router.navigate(['/login']);
  
  

}

}
