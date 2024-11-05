import { Person } from "../model/person.ts";

export async function getDoctors(): Promise<Person[]> {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/doctors`);
  return await response.json();
}
