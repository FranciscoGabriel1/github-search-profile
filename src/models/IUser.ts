export interface IUser {
  login: string;
  id: number;
  avatar_url: string;
  name?: string;
  email?: string;
  bio?: string;
  followers: number;
  following: number;
}
