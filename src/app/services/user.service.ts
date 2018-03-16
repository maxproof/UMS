import {Injectable} from '@angular/core';
import {User} from '../classes/user';
import {UserInterface} from '../interfaces/user';
@Injectable()
export class UserService {
    users: User[] = [
        {
            id: 1,
            name: 'Max1',
            lastname: 'Proof1',
            fiscalcode: 'FGHJFJHGFGF',
            email: 'm@m.org',
            province: 'BE',
            phone: '4474665555',
            age: 49
          },
          {
            id: 2,
            name: 'Max2',
            lastname: 'Proof2',
            fiscalcode: 'FGHJFJHGFGF',
            email: 'm@m.org',
            province: 'BE',
            phone: '4474665555',
            age: 49
          },
          {
            id: 3,
            name: 'Max3',
            lastname: 'Proof3',
            fiscalcode: 'FGHJFJHGFGF',
            email: 'm@m.org',
            province: 'BE',
            phone: '4474665555',
            age: 49
          },
          {
            id: 4,
            name: 'Max4',
            lastname: 'Proof4',
            fiscalcode: 'FGHJFJHGFGF',
            email: 'm@m.org',
            province: 'BE',
            phone: '4474665555',
            age: 49
          }
    ];

    constructor() {
    }

       getUsers() {
        return this.users;
    }
    getUser(id: number): User {
        return this.users.find( user => user.id === id);
    }

    deleteUser(user) {
        const index = this.users.indexOf(user);
        if (index >= 0) {
            this.users.splice(index, 1);
        }
    }
    updateUser(user: UserInterface) {
        const idx = this.users.findIndex((v) => v.id === user.id);

        if (idx !== -1) {
            this.users[idx] = user;
        }
    }
    createUser(user: UserInterface) {

            this.users.splice(0, 0, user);

    }
}
