import { Component, OnInit } from '@angular/core';
import { BookModel } from './book.model'
import { BookService } from '../book.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:String = "Books";
  books: BookModel[] = [];

  constructor(private bookService: BookService, private router:Router, public _auth: AuthService ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }
  updatebook(){
    this.router.navigate(['/updatebook']);

  }
  deletebook(){
    this.router.navigate(['/']);

  }

}
