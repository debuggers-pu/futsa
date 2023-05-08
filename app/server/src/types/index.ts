export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  hash_password: string;
  phoneNumber: number;
  image?: string;
  role: string;
}
