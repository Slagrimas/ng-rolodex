import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionServices } from '../../services/session.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  title: string = "Homepage";
  allContacts: any;

  formSearch: {
    searchInput: string
  } = {
      searchInput: '',
    };

  constructor(private backend: BackendService, private session: SessionServices) {

  }

  searchInput() {
    console.log(this.formSearch)
  }

  ngOnInit() {
    this.allContacts = this.backend.getContacts;

    this.backend.getContacts()
      .then(results => {
        console.log("results:", results);
        this.allContacts = results;
      })
      .catch(err => {
        console.log("allContacts - error:", err);
      })
  }

  isLoggedIn(){
    return this.session.getIsLoggedIn();
}

onKey(event: any) {
  console.log("this.formSearch.searchInput:", this.formSearch.searchInput);

  if (this.formSearch.searchInput) {
    let filteredContacts = this.allContacts.filter((element, index) => {
      // console.log("current element.name:", element.name);
      return element.name.toLowerCase().includes(this.formSearch.searchInput.toLowerCase());
    })

    this.allContacts = filteredContacts;
    console.log("new this.allContacts:", this.allContacts);
  }

  else if (this.formSearch.searchInput === "") {
    this.backend.getContacts()
      .then(results => {
        // console.log("results:", results);
        this.allContacts = results;
      })
      .catch(err => {
        // console.log("GET - allContacts - error:", err);
      })
  }
}
}
