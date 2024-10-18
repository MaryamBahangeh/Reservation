import { Consultant } from "../models/consultant.ts";

export async function getConsultants(): Promise<Consultant[]> {
  const response = await fetch("http://localhost:5000/consultants");
  return await response.json();
}
