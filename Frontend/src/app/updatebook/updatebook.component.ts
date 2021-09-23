import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  constructor(private router:Router) { }
  updatebook(){
    this.router.navigate(['/books']);
  }

  ngOnInit(): void {
  }

}
