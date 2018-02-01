import {Injectable} from '@angular/core';

@Injectable()

export class UserService {

  users = [
            {
              firstname: 'Max1',
              lastname: 'Proof1',
              socialsecuritycode: 'FGHJFJHGFGF',
              email: 'm@m.org',
              region: 'BE',
              phonenumber: '4474665555',
              age: 49
            },
            {
              firstname: 'Max2',
              lastname: 'Proof2',
              socialsecuritycode: 'FGHJFJHGFGF',
              email: 'm@m.org',
              region: 'BE',
              phonenumber: '4474665555',
              age: 49
            },
            {
              firstname: 'Max3',
              lastname: 'Proof3',
              socialsecuritycode: 'FGHJFJHGFGF',
              email: 'm@m.org',
              region: 'BE',
              phonenumber: '4474665555',
              age: 49
            },
            {
              firstname: 'Max4',
              lastname: 'Proof4',
              socialsecuritycode: 'FGHJFJHGFGF',
              email: 'm@m.org',
              region: 'BE',
              phonenumber: '4474665555',
              age: 49
            }
  ];

  constructor() {
  }

  getUsers() {

    return this.users;

  }

  deleteUser(user) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

}
