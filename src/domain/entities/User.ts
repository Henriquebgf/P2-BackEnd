  export default class User {
    private _id: string;
    private _name: string;
    private _email: string;
    private _password: string;
  
    constructor(id: string, name: string, email: string, password: string) {
      this._id = id;
      this._name = name;
      this._email = email;
      this._password = password;
    }
  
    // getters
    get id(): string {
      return this._id;
    }
  
    get name(): string {
      return this._name;
    }
  
    get email(): string {
      return this._email;
    }
  
    get password(): string {
      return this._password;
    }
  
    // setters
    set id(id: string) {
      this._id = id;
    }
  
    set name(name: string) {
      this._name = name;
    }
  
    set email(email: string) {
      this._email = email;
    }
  
    set password(password: string) {
      this._password = password;
    }
  }
  
  /*export default class User {
    id: string;
    name: string;
    email: string;
    password: string;
  
    constructor(id: string, name: string, email: string, password: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
    }
  
    // getters e setters
  }
  */