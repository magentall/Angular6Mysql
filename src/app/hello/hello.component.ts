import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.sass']
})
export class HelloComponent implements OnInit {

  myvar = "easy"
  bitwiseOR = 2 | 5
  i=0

  constructor() { }


  ngOnInit() {
  }

}
