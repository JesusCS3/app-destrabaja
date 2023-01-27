export class user{
    gettoken: any;
    constructor(
        public id: string,
        public username: string,
        public email: string,
        public phone: string,
        public password: string,
    ){}
}