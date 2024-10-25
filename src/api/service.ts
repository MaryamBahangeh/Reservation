import { Service } from "../model/service.ts";
export async function getServices(): Promise<Service[]> {
  const response = await fetch(`${import.meta.env.VITE_API_BAES_URL}/services`);
  return await response.json();
}
