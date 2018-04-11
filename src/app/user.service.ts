import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { observable } from 'rxjs/Observable';

interface myData {
  message: string,
  success: boolean
}

interface isLoggedIn {
  status: boolean
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

}
