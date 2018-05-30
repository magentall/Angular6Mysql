import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    this.Auth.getUserDetails(username, password).subscribe(data => {
      if(data.success){
        // redir to /admin
        if(username=="supuz"){
          this.router.navigate(['dash87675'])
          this.Auth.setLoggedIn(true)
        }
        else{
          this.router.navigate(['admin'])
          this.Auth.setLoggedIn(true)
        }
      } else {
      window.alert(data.message)
    }
    })

    //console.log(username, password)
  }

}
