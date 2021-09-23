import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {

  constructor(private router:Router) { }
  updateauthor(){
    this.router.navigate(['/authors']);
  }

  ngOnInit(): void {
  }

}
