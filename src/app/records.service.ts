import { Injectable } from '@angular/core';

@Injectable()
export class RecordsService {

  constructor() { }

  getData() {
    return [
      {
        name: 'Sizzer',
        online: true
      },
      {
        name: 'SizzAa',
        online: false
      },
      {
        name: 'SArr',
        online: true
      }
    ]
  }

}
