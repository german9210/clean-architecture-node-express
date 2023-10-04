export interface IUserResponse {
    data: IUserData;
}

export interface IUserData {
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    email: string;
}
