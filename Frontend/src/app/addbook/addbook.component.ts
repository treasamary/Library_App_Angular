import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from '../books/book.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  title:String = "Add Book";

  constructor(private bookService: BookService, private router: Router) { }
  bookItem = new BookModel("","","","","","");

  ngOnInit(): void {
    
  }
  Addbook(){
    this.bookService.newBook(this.bookItem);
    alert("Success");
    this.router.navigate(['/books']);
  }

}


