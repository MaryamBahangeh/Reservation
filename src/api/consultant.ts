import { Consultant } from "../model/consultant.ts";

export async function getConsultants(): Promise<Consultant[]> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/consultants`,
  );
  return await response.json();
}
