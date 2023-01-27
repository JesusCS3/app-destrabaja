export class userModel{
    id?: string;
    userName?: string;
    password?: string;
    email?: string;
    phone?: string;
    given_name?: string;
    idToken?: string;
    user?: userModel;
    isLoggedIn: boolean = false;
}