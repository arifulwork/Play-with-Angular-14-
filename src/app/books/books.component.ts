import { Component, OnInit } from '@angular/core';

interface Book {

  name: string
  author: string 
  image: string
  amount: number

}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book [] = [
   
    {
      name: 'clean code',

      author: 'robert C martin',
    
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',

      amount: 700,
    },

    {
      name:'software architect',

      author:  'anatoly volkhover',

      image:  'https://m.media-amazon.com/images/P/1697271065.01._SCLZZZZZZZ_SX500_.jpg',

      amount: 900,
    },

    {
      name:'python: - the bible-',

      author:  'maurice J. Thompson',

      image:  'https://m.media-amazon.com/images/P/1980953902.01._SCLZZZZZZZ_SX500_.jpg',

      amount: 1900,
    },

    {
      name:'python programming for beginners',

      author:  'codeone publishing',

      image:  'https://m.media-amazon.com/images/P/B0BL2PHJJ9.01._SCLZZZZZZZ_SX500_.jpg',

      amount: 2900,
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
