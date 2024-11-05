import { Person } from "../model/person.ts";

export async function getClinics(): Promise<Person[]> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/clinicsI}`,
  );
  return await response.json();
}
