export interface IClient {
  name: string;
  email: string;
  password: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  city: string;
  role: "user" | "admin" | "manager";
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
