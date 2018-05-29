import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  message = " Loading.... "
  tabjeu = []
  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getSomeData().subscribe(data => {
      this.message = data.message
      this.message2 = data.message2
      this.tabjeu = data.obj
      if(!data.success){
        localStorage.removeItem('loggedIn')
      }
    })
  }

}
