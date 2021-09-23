import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../authors/author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: AuthorModel;

  constructor(private authorService: AuthorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
