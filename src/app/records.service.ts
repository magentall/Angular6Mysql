import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  obj: Array<Object>
}

@Injectable()
export class RecordsService {

  constructor(private http: HttpClient) { }

  getData() {
  // return this.http.get<myData>('api/file.php')
	   return this.http.get<myData>('api/tabdispo.php')
    //return this.http.get<myData>('stz/trash/temp/0024htm/tabSkillz.php')

  }

}

/*

| Angular 4200 | --> makes an API call --> | API Server 1234 |
| Angular 4200 | --> make API call to /api/* --> webpack dev server --> | API server 1234 |

*/
