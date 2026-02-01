"use server";

import { PATHSNAME } from "@/constants/paths-name";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  (await cookies()).delete("sessionToken");
  redirect(PATHSNAME.LOGIN);
}
