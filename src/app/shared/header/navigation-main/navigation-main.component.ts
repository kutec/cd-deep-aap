import { Component, OnInit } from '@angular/core';
import { ApiService  } from '../../../_services/api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dp-navigation-main',
  templateUrl: './navigation-main.component.html',
  styleUrls: ['./navigation-main.component.css']
})
export class NavigationMainComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNavigation().subscribe(res => {
      console.log('res', res)
    })
  }

}