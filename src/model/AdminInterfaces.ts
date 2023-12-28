import { Timestamp } from "firebase/firestore";

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface AddUserFormValues {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
  number: string;
  city: string;
  general?: string;
}

export interface SubmitUserValues
  extends Omit<AddUserFormValues, "repeatPassword"> {}

export interface SubmitUserResponse {
  fullName?: string;
  number?: string;
  city?: string;
  createdAt?: Timestamp;
  success: boolean;
  error?: string;
}

export interface TransformedSubmitUserResponse
  extends Omit<SubmitUserResponse, "createdAt"> {
  createdAt: string;
}
