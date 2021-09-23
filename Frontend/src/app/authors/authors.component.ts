import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorModel } from './author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title:String = "Authors";
  authors: AuthorModel[] = [];

  constructor(private authorService: AuthorService, private router:Router) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }
  updateauthor(){
    this.router.navigate(['/updateauthor']);

  }
  deleteauthor(){
    this.router.navigate(['/']);

  }

}
