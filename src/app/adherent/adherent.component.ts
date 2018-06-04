import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.sass']
})
export class AdherentComponent implements OnInit {

  constructor(private User: UserService) { }

  ngOnInit() {
  }

  addad(event){
    event.preventDefault()
    const target = event.target
    const alias = target.querySelector('#alias').value
    const pswd = target.querySelector('#passwordadd').value
    const noms = target.querySelector('#noms').value
    this.User.ajoutAdherent(alias,pswd,noms).subscribe(data => {
      if(data.success){
        alert("insert oK")
      } else {
      window.alert(data.message)
      }
      })

  }

}
