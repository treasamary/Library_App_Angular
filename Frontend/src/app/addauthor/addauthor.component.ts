import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../authors/author.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  title:String = "Add Author";
  authorItem = new AuthorModel("","","","","");

  constructor(private authorService:AuthorService, private router:Router) { }
  Addauthor(){
    this.authorService.newAuthor(this.authorItem);
    alert("Success");
    this.router.navigate(['/authors']);
  }

  ngOnInit(): void {
  }

}
