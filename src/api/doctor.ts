import { Person } from "../models/person.ts";

export async function getDoctors(): Promise<Person[]> {
  const response = await fetch("http://localhost:5000/doctors");
  return await response.json();
}
