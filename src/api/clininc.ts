import { Person } from "../model/person.ts";
export async function getClinics(): Promise<Person[]> {
  const response = await fetch(`${import.meta.env.VITE_API_BAES_URL}/clinics`);
  return await response.json();
}
