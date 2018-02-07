import {UserInterface} from '../interfaces/user';

export class User implements UserInterface {

  id: number;
  firstname: string;
  lastname: string;
  socialsecuritycode: string;
  email: string;
  region: string;
  phonenumber: string;
  age: number;

  constructor() {
    this.id = 0;
    this.firstname = '';
    this.lastname = '';
    this.socialsecuritycode = '';
    this.email = '';
    this.region = '';
    this.phonenumber = '';
    this.age = 18;
  }

}
