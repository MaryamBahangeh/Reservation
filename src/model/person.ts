import { Service } from "./service.ts";
import { Gender } from "../enums/gender.ts";

export type Person = {
  id: number;
  name: string;
  gender: Gender;
  star: string;
  happyPatients: number;
  allPatients: number;
  address: string;
  fields: string[];
  image: string;
  specialtyId: number;
  specialtyName: string;
  services: Service[];
};
