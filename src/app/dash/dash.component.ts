import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.sass']
})
export class DashComponent implements OnInit {

  tabprets = []

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getListPrets().subscribe(data2 => {
      this.tabprets = data2.obj
      if(!data2.success){
        //localStorage.removeItem('loggedIn')
      }
    })
  }

}
