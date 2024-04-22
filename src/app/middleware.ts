// export { auth as middleware } from "./auth"

import { NextResponse } from "next/server";
import { auth } from "./auth";

export const middleware = auth((req) => {
  console.log("next req: ", req);
  if (!req.auth) {
    return NextResponse.redirect("/login");
  }
});
