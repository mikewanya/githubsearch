import { Component, OnInit } from '@angular/core';

// imports
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
//phase 2 profile
private profile:any[];

//add code inside constructor
  constructor(private searchService: SearchService) {
    this.searchService.getProfileInfo().subscribe(profile => {
       console.log(profile);
       
       //phase 2 profile propety to be used search.component
       this.profile = profile;
     });

   }

  ngOnInit() {
  }

}
