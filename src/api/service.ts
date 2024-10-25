import { Service } from "../model/service.ts";
export async function getServices(): Promise<Service[]> {
  const response = await fetch("http://localhost:5000/services");
  return await response.json();
}
