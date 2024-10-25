import { Speciality } from "../model/speciality.ts";

export async function getSpecialities(): Promise<Speciality[]> {
  const response = await fetch("http://localhost:5000/specialities");
  return await response.json();
}
