import {Injectable} from '@angular/core';
import {User} from '../classes/user';
import {UserInterface} from '../interfaces/user';

@Injectable()

export class UserService {

  users: User[] = [
            {
              id: 1,
              firstname: 'Max1',
              lastname: 'Proof1',
              socialsecuritycode: 'FGHJFJHGFGF',
              email: 'm@m.org',
              region: 'BE',
              phonenumber: '4474665555',
              age: 49
            },
            {
              id: 2,
              firstname: 'Max2',
              lastname: 'Proof2',
              socialsecuritycode: 'FGHJFJHGFGF',
              email: 'm@m.org',
              region: 'BE',
              phonenumber: '4474665555',
              age: 49
            },
            {
              id: 3,
              firstname: 'Max3',
              lastname: 'Proof3',
              socialsecuritycode: 'FGHJFJHGFGF',
              email: 'm@m.org',
              region: 'BE',
              phonenumber: '4474665555',
              age: 49
            },
            {
              id: 4,
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

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex(v => v.id === user.id);
    //alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }

  createUser(user: UserInterface) {
      this.users.splice(0, 0, user);
    }

  }

}
