import { Person } from "../models/person.ts";

export async function getClinics(): Promise<Person[]> {
  const response = await fetch("http://localhost:5000/clinics");
  return await response.json();
}
