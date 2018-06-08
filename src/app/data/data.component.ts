import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service'
import { UserService } from '../user.service'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.sass']
})

export class DataComponent implements OnInit {

  rec = []
  tabcat = []

  constructor(private myFirstService : RecordsService,private user: UserService) { }

  ngOnInit() {

    this.myFirstService.getData().subscribe(data =>{
          this.rec = data.obj
        })

    this.user.getListCat().subscribe(data2 => {
          this.tabcat = data2.obj
          if(!data2.success){
            localStorage.removeItem('loggedIn')
          }
        })

  }
}
