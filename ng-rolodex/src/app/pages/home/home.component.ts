import { Component, OnInit } from '@angular/core';




 @Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
   title: string = "Homepage";

   formSearch: {
    search: string,
  } = {
      search: '',
    };

  constructor() { 

  }

  searchInput() {
    console.log(this.formSearch)
  }

   ngOnInit() {
  }

 }

