"use server";

import { auth } from "@/app/auth";
import { dbCharacter } from "@/types/Character";
import { DefaultResponse } from "@/types/basicTypes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getCharacterList() {
  const session = await auth();
  if (!session) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Can't create character without a valid session!");
  }

  const headers = new Headers();
  headers.set("authorization", session?.sessionToken || "");

  const res = await fetch("http://localhost:8000/character/list", {
    method: "GET",
    headers,
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as unknown as DefaultResponse<dbCharacter[]>;
}

export async function addNewCharacter() {
  const session = await auth();
  if (!session) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Can't create character without a valid session!");
  }

  const headers = new Headers();
  headers.set("authorization", session?.sessionToken || "");

  const res = await fetch("http://localhost:8000/character/", {
    method: "POST",
    headers,
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  revalidatePath("/play/setup");
}
