export interface UserDetails {
  email: string;
  name: string;
  admin: boolean;
  exp: number;
  iat: number;
  userId: string;
  authorized: boolean;
  password?: string; // usually excluded
  text?: string;
}
