export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoggedInUser {
  id: number;
  username: string;
  token: string;
}

export interface CheckLoggedInUser {
  loggedIn: boolean;
  username: string;
}
