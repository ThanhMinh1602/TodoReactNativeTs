export class RegisterModel {
    name: string;
    email: string;
    password: string;
    age: number;
    code: string;

    constructor(name: string,
        email: string,
        password: string,
        age: number,
        code: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        this.code = code;
    }

    static fromJson(json: any): RegisterModel {
        return new RegisterModel(
            json.name,
            json.email,
            json.password,
            json.age,
            json.code
        );
    }

    toJson(): any {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            age: this.age,
            code: this.code
        };
    }
}

