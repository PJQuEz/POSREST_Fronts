import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  links = [
    {
      icon: 'home',
      name: 'Home',
      path: '/'
    },
    {
      icon: 'collections_bookmark',
      name: 'Style Guides',
      path: '/styles'
    },
    {
      icon: 'view_week',
      name: 'Another Page',
      path: '/not-found'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
