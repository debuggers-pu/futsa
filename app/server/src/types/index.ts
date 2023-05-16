import { Schema } from "mongoose";

export enum USER_ROLE {
  CUSTOMER = "customer",
  FUTSAL = "futsal"
}
export enum BOOKING_STATUS {
  PENDING = "pending",
  BOOKED = "booked",
  AVAILABLE ="available"
}

type geolocation = {
  latitude : string,
  longitude : string
}

export interface IUser {
  email: string;
  hash_password: string;
  role: USER_ROLE;
  authenticate: Function;
}

export interface ICustomer {
  firstname : string;
  lastname : string;
  address? : string;
  phonenumber : number;
  geolocation? : geolocation
  userId: Schema.Types.ObjectId;
  image? : string;
  points : number
}


export interface IReview {
  userId: Schema.Types.ObjectId;
  message : string;
  value : number;
}

export interface IRToken {
  userId: Schema.Types.ObjectId;
  refreshToken: string;
}

export interface IEvent {
  userId : Schema.Types.ObjectId;
  description : string;
  image : string;
}

export interface IBooking {
  userId : Schema.Types.ObjectId;
  futsalId : Schema.Types.ObjectId;
  bookedAt : Date;
  bookedFor : Date;
  status : BOOKING_STATUS;
}


export interface IFutsal {
  userId: Schema.Types.ObjectId;
  name : string;
  address? : string;
  description? : string;
  phonenumber? : number;
  geolocation? : geolocation
  image? : string;
  openingHour : string;
  closingHour : string;
  price : number;
  reviews : Schema.Types.ObjectId[]
  events : Schema.Types.ObjectId[]
}