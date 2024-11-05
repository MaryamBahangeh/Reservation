import { Speciality } from "../model/speciality.ts";

export async function getSpecialities(): Promise<Speciality[]> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/specialities`,
  );
  return await response.json();
}
