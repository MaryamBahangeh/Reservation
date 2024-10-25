import { Service } from "./service.ts";

export type Person = {
  id: number;
  name: string;
  gender: boolean;
  star: string;
  happyPatients: number;
  allPatients: number;
  address: string;
  fields: string[];
  image: string;
  specialtyId: number;
  specialtyName: string;
  serviceId: number;
  serviceName: string;
  services: Service[];
};
