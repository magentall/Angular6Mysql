import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.sass']
})
export class DashComponent implements OnInit {

  tab1 =[]

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getListPrets().subscribe(data => {
//      this.message = data.message
      this.tab1 = data.obj
      if(!data.success){
        localStorage.removeItem('loggedIn')
      }
    })
  }

}
