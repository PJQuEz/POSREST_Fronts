import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  toggled: boolean;
  data: any;
  options = {
    'number': 1,
    'title': 'Member',
    'action': 'member',
    'breadcrumb': [
      {
        'name': 'Home',
        'link': '/'
      }, {
        'name': 'Manage Member',
        'link': '/member'
      }
    ],

    'params':
    {
      'headers': [
        {
          'prop': 'name',
          'type': 'text',
          'name': 'Name',
          'maxWidth': '250'
        },
        {
          'prop': 'email',
          'type': 'text',
          'name': 'Email'
        },
        {
          'prop': 'roleName',
          'type': 'text',
          'name': 'Role'
        }
      ]
    }
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    // this.authService.obMe.subscribe((user: User) => {
    //   this.user = user;
    //   this.toggled = true;

    // });
    // this.userService.all().then((res) => {
    //   this.data = res;
    //   console.log(res)
    // });
  }

  delete(e) {
    // this.userService.delete(e.id).then((res) => {
    //   location.reload();
    // }, (error) => {
    //   console.log(error);
    // });
  }

}
