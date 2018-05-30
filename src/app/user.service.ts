import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

interface myData {
  message: string,
  message2: string,
  obj: Array<Object>
  success: boolean
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
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

  getListPrets(date_debut,date_fin) {
    return this.http.get<myData>('/api/listprets.php')
  }

  ajoutAdherent(noms,alias,key) {
    return this.http.get<myData>('/api/addad.php')
  }

  getListJeux() {
    return this.http.get<myData>('/api/jeux.php')
  }

  getListCat() {
    return this.http.get<myData>('/api/cat.php')
  }

  getListSurCat() {
    return this.http.get<myData>('/api/surcat.php')
  }
}
