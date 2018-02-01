import {Injectable} from '@angular/core';

@Injectable()

export class UserService {

  constructor() {
  }

  getUsers() {

    return [
      {
        firstname: 'Max1',
        lastname: 'Carbone1',
        socialsecuritycode: 'FGHJFJHGFGF',
        email: 'm@m.org',
        region: 'BE',
        phonenumber: '4474665555',
        age: 49
      },
      {
        firstname: 'Max2',
        lastname: 'Carbone2',
        socialsecuritycode: 'FGHJFJHGFGF',
        email: 'm@m.org',
        region: 'BE',
        phonenumber: '4474665555',
        age: 49
      },
      {
        firstname: 'Max3',
        lastname: 'Carbone3',
        socialsecuritycode: 'FGHJFJHGFGF',
        email: 'm@m.org',
        region: 'BE',
        phonenumber: '4474665555',
        age: 49
      },
      {
        firstname: 'Max4',
        lastname: 'Carbone4',
        socialsecuritycode: 'FGHJFJHGFGF',
        email: 'm@m.org',
        region: 'BE',
        phonenumber: '4474665555',
        age: 49
      }
    ];

  }

}
