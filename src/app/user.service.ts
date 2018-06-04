import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

interface myData {
  message: string,
  message2: string,
  obj: Array<Object>,
  success: boolean
}

interface myData2 {
  obj: Array<Object>,
  success: boolean
}

interface ok {
  success: boolean,
  message: string
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}

interface addad {
  alias : string,
  key : string,
  noms : string
}

@Injectable()
export class UserService {



  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('/api/database.php')
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isloggedin.php')
  }

  logout() {
    return this.http.get<logoutStatus>('/api/logout.php')
  }

  getListPrets() {
    return this.http.get<myData2>('/api/listprets.php')
  }

  ajoutAdherent(alias,pswd,noms) {
    return this.http.post<ok>('/api/addad.php', {alias,pswd,noms})
  }

  getListCat() {
    return this.http.get<myData2>('/api/cat.php')
  }

  getListSurCat() {
    return this.http.get<myData2>('/api/surcat.php')
  }
}
