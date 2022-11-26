import { Component, OnInit } from '@angular/core';

interface Book {

  name: string
  author: string 
  image: string

}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book [] = [
   
    {
      name: 'Clean Code',

      author: 'Robert C Martin',
    
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    },

    {
      name:'Software Architect',

      author:  'Anatoly Volkhover',

      image:  'https://m.media-amazon.com/images/P/1697271065.01._SCLZZZZZZZ_SX500_.jpg',
    }

  ]

  

  

  isShowing : boolean = true;

  toggleBooks(){
    // if this.isShowing is true, then make it false 
    // if this.isShowing is false, then make it true 
    this.isShowing = !this.isShowing;
  }

  constructor() { }

  ngOnInit(): void {
  }



  

}
