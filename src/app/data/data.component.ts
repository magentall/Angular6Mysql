import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.sass']
})

export class DataComponent implements OnInit {

  rec = []

  constructor(private myFirstService : RecordsService) { }

  ngOnInit() {
    // use fuction from recordsServeTS to get data
    this.myFirstService.getData().subscribe(data =>{
          console.log("we got gg", data.obj)
          this.rec = data.obj
        })
        }
}
