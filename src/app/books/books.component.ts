import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  name: string = 'Clean Code';

  author: string = 'Robert C Martin';

  src: string = 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg';

  name2: string ='Software Architect';

  author2: string = 'Anatoly Volkhover';

  src2: string = 'https://m.media-amazon.com/images/P/1697271065.01._SCLZZZZZZZ_SX500_.jpg';

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
