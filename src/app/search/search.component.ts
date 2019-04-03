import { Component, OnInit } from '@angular/core';

// imports
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

//add code inside constructor
  constructor(private searchService: SearchService) {
    this.searchService.getProfileInfo().subscribe(profile => {
       console.log(profile);
     });

   }

  ngOnInit() {
  }

}
